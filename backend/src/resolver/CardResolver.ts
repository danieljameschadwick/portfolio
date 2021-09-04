import { Args, Query, Resolver } from "@nestjs/graphql";
import { Card } from "../entity/Card/Card";
import { CardService } from "../service/CardService";
import { CardType } from "../enum/CardType";

@Resolver(of => Card)
export class CardResolver {
    constructor(
        private cardService: CardService,
    ) {}

    @Query(returns => Card)
    async card(@Args('_id', { type: () => String }) id: string): Promise<Card> {
        return await this.cardService.getOneById(id);
    }

    @Query(returns => [Card])
    async cards(
        @Args('cardType', { type: () => String }) cardType?: CardType
    ): Promise<Card[]> {
        return await this.cardService.getAll(cardType);
    }
}
