import { ReactSVG } from "react-svg";

type Props = {
  title: string;
  caption: string;
  skills: string[];
  studying: string[];
};

export const Attribute: React.FC<Props> = ({
  title,
  caption,
  skills,
  studying,
}) => {
  return (
    <div className={"attribute"}>
      <span className="icon">
        <ReactSVG src={`img/svg/attribute/${title.toLowerCase()}.svg`} />
      </span>

      <h2 className="heading">{title}</h2>

      <p className="text">{caption}</p>

      <h3 className="heading">Skills</h3>

      <ul className="list">
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>

      <h3 className="heading">Studying</h3>

      <ul className="list">
        {studying.map((study) => {
          return <li key={study}>{study}</li>;
        })}
      </ul>
    </div>
  );
};
