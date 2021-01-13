import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


import * as mongoose from 'mongoose';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    mongoose.connect('mongodb://127.0.0.1:27017/nest-blog-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const options = new DocumentBuilder()
        .setTitle('nest博客')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);

    await app.listen(3000);
}
bootstrap();
