import { Module } from "@nestjs/common";
import { CardController } from "../controller/Card.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { CardService } from "../service/CardService";
import { Card } from "../entity/Card/Card";
import { CardResolver } from "../resolver/CardResolver";

@Module({
    imports: [
        MikroOrmModule.forFeature([Card])
    ],
    controllers: [
        CardController,
    ],
    providers: [
        CardService,
        CardResolver,
    ],
})
export class CardModule {}
