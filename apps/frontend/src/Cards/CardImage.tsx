type Props = {
    imagePath: string;
};

export const CardImage: React.FC<Props> = ({ imagePath }) => {
    return (
        <div>
            <img src={imagePath} alt={""} />
        </div>
    );
};
