import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura pipes globais
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Configuração do Swagger - Documentação da API
  const config = new DocumentBuilder()
    .setTitle('NestJS API - Base')
    .setDescription(
      'Documentação da API, criada com NestJS para servir como base.',
    )
    .setVersion('1.0')
    .build();

  // Criação do documento Swagger e setup do módulo Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Inicia a aplicação na porta especificada ou na porta 3000 por padrão
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
