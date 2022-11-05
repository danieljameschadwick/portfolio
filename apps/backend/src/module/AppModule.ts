import { Module } from "@nestjs/common";
import { CardModule } from "./CardModule";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { GraphQLModule } from "@nestjs/graphql";
import { GqlConfigService } from "../service/GqlConfigService";

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        GraphQLModule.forRootAsync({
            useClass: GqlConfigService,
        }),
        CardModule,
    ],
})
export class AppModule {}
