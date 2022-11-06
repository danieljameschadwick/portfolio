import ReactHtmlParser from "react-html-parser";

type Props = {
    description: string;
};

export const CardDescription: React.FC<Props> = ({ description }) => {
    return (
        <div>
            {ReactHtmlParser(description)}
        </div>
    );
};
