import { CardType } from "../enum/CardType";
import { Technology } from "../enum/Technology";

export class CardDTO {
    cardType: CardType;
    title: string;
    description: string;
    displayOrder: number;
    subTitle?: string | null;
    imagePath?: string | null;
    technologies?: Technology[] | null;
}