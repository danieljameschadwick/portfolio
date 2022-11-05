type Props = {
    title: string;
}

export const CardTitle: React.FC<Props> = ({ title }) => {
    return (
        <h3 className="item-title">
            {title}
        </h3>
    );
};
