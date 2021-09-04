import {
    BaseEntity,
    Entity,
    PrimaryKey,
    Property,
    Unique,
} from "@mikro-orm/core";

@Entity()
@Unique({ properties: ["handle"] })
export class Technology extends BaseEntity<Technology, "_id"> {
    @PrimaryKey()
    _id!: string;

    @Property()
    handle!: string;

    @Property()
    name!: string;
}
