import { Body, Controller, Get, Post } from "@nestjs/common";
import { CardService } from "../service/CardService";
import { Card } from "../entity/Card/Card";
import { CardDTO } from "../dto/CardDTO";

@Controller("/card")
export class CardController {
    constructor(
        private readonly cardService: CardService
    ) {}

    @Get("/skills")
    getSkills(): Promise<Card[]> {
        return this.cardService.getSkills();
    }

    @Get("/work")
    getWork(): Promise<Card[]> {
        return this.cardService.getWork();
    }

    @Post("/")
    create(@Body() cardDTO: CardDTO): Promise<Card|null> {
        return this.cardService.create(cardDTO);
    }

    @Post("/bulk")
    async bulkCreate(@Body() cardDTOs: CardDTO[]): Promise<Card[]> {
        const cards: Card[] = [];

        for (const cardDTO of cardDTOs) {
            const card = await this.cardService.create(cardDTO);

            if (card === null) {
                continue;
            }

            cards.push(card);
        }

        return cards;
    }
}
