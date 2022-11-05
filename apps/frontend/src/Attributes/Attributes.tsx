import { Attribute } from "./Attribute";

export const Attributes: React.FC = () => {
    return (
        <div className={"attributes-container container mt-12 mb-10 mx-auto w-9/12"}>
            <div className={"attributes"}>
                <Attribute
                    title={"Frontend"}
                    caption={"Specialising in response, modern, designs which translate to any business ranging from small businesses to large enterprises."}
                    skills={[
                        "HTML/CSS",
                        "LESS/SASS",
                        "JavaScript",
                        "TailwindCSS",
                        "Twig",
                    ]}
                    studying={[
                        "React",
                        "NextJS",
                    ]}
                />

                <Attribute
                    title={"Backend"}
                    caption={"Responsible for developing applications which can scale for thousands of users - both for internal users or public. Experienced in developing standalone applications with cached data, microservices and monolithic applications."}
                    skills={[
                        "PHP7",
                        "Symfony Framework 3/4",
                        "Doctrine ORM",
                        "RESTful APIs",
                        "OOP, SOLID, MVC",
                        "PSR",
                    ]}
                    studying={[
                        "NestJS",
                        "MikroORM",
                    ]}
                />

                <Attribute
                    title={"DevOps"}
                    caption={"Developing web applications using Amazon S3, CloudWatch and CloudFront."}
                    skills={[
                        "AMQP (RabbitMQ)",
                        "Docker",
                        "Apache/nginx",
                        "Linux (CentOS, Ubuntu)",
                        "Git",
                    ]}
                    studying={[
                        "Advanced AMQP",
                        "AWS Lambda",
                    ]}
                />
            </div>
        </div>
    );
};
