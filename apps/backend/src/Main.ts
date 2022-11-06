import { NestFactory } from "@nestjs/core";
import { AppModule } from "./module/AppModule";

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    await app.listen(process.env.PORT || 4000);
};

bootstrap();
