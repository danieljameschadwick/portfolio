import { CardDescription } from "./CardDescription";

type Props = {
    description: string;
};

export const CardContent: React.FC<Props> = ({ description }) => {
    return (
        <div>
            <CardDescription description={description} />
        </div>
    );
};
