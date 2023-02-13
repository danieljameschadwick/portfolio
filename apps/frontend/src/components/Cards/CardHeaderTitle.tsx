type Props = {
  title: string;
  subTitle?: string | null;
};

export const CardHeaderTitle: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className={"title-wrapper"}>
      <span className={"item-title"}>
        {title} <small>{subTitle}</small>
      </span>
    </div>
  );
};
