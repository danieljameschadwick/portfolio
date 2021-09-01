import {
    BaseEntity,
    Entity,
    Enum,
    PrimaryKey,
    Property,
    Unique,
} from "@mikro-orm/core";
import { CardType } from "../../enum/CardType";
import { Technology } from "../../enum/Technology";
import { CardDTO } from "../../dto/CardDTO";

@Entity()
@Unique({ properties: ["cardType", "displayOrder"] })
export class Card extends BaseEntity<Card, "_id"> {
    @PrimaryKey()
    _id!: string;

    @Enum(() => CardType)
    cardType!: CardType;

    @Property()
    title!: string;

    @Property()
    description!: string;

    @Property()
    displayOrder!: number;

    @Property({
        nullable: true,
    })
    subTitle?: string;

    @Property({
        nullable: true,
    })
    imagePath?: string;

    /**
     * @TODO: convert Technology to base lookup
     */
    @Enum({ items: () => Technology, array: true, default: [] })
    technologies: Technology[];

    constructor(
        cardType: CardType,
        title: string,
        description: string,
        displayOrder: number,
        subTitle: string,
        imagePath: string,
        technologies: Technology[],
    ) {
        super();

        this.cardType = cardType;
        this.title = title;
        this.description = description;
        this.displayOrder = displayOrder;
        this.subTitle = subTitle;
        this.imagePath = imagePath;
        this.technologies = technologies;
    }

    static createFromDTO(cardDTO: CardDTO): Card {
        return new Card(
            cardDTO.cardType,
            cardDTO.title,
            cardDTO.description,
            cardDTO.displayOrder,
            cardDTO.subTitle,
            cardDTO.imagePath,
            cardDTO.technologies,
        );
    }
}
