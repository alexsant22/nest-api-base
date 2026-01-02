import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Conecta ao banco de dados quando o módulo é inicializado
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta do banco de dados quando o módulo é destruído
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
