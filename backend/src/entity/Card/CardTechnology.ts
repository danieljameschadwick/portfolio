import {
    BaseEntity,
    Entity,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
    Unique,
} from "@mikro-orm/core";
import { Card } from "./Card";
import { Technology } from "./Technology";

@Entity()
@Unique({ properties: ["handle"] })
export class CardTechnology extends BaseEntity<CardTechnology, "_id"> {
    @PrimaryKey()
    _id!: string;

    @SerializedPrimaryKey()
    id!: string;

    @Property()
    card!: Card;

    @Property()
    technology!: Technology;
}
