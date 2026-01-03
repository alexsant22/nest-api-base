import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Novo Projeto', description: 'Título do projeto' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Desenvolvimento de uma base genérica' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1, description: 'ID do usuário dono do projeto' })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
