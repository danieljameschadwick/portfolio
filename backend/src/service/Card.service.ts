import { Injectable } from "@nestjs/common";
import { EntityManager, EntityRepository } from "@mikro-orm/core";
import { Card } from "../entity/Card/Card";
import { CardType } from "../enum/CardType";
import { InjectRepository } from "@mikro-orm/nestjs";
import { CardDTO } from "../dto/CardDTO";

@Injectable()
export class CardService {
    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: EntityRepository<Card>,

        private readonly em: EntityManager,
    ) {}

    getOneById(id: number): Promise<Card> {
        return this.cardRepository.findOneOrFail({
            _id: id,
        });
    }

    getAll(cardType?: CardType): Promise<Card[]> {
        if (cardType === undefined) {
            return this.cardRepository.findAll();
        }

        return this.getByCardType(cardType);
    }

    getByCardType(cardType: CardType): Promise<Card[]> {
        return this.cardRepository.find({
            cardType,
        });
    }

    getSkills(): Promise<Card[]> {
        return this.getByCardType(CardType.SKILL);
    }

    getWork(): Promise<Card[]> {
        return this.getByCardType(CardType.WORK);
    }

    async create(cardDTO: CardDTO): Promise<Card | null> {
        const card = Card.createFromDTO(cardDTO);

        if (card === undefined) {
            return null;
        }

        await this.em.persistAndFlush(card);

        return card;
    }
}
