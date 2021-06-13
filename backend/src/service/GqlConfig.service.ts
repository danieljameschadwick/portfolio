import { Injectable } from "@nestjs/common";
import { GqlModuleOptions, GqlOptionsFactory } from "@nestjs/graphql";

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions {
        return {
            typePaths: ['./**/*.graphql'],
        };
    }
}
