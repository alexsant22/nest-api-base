import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Nome do Usuário',
    description: 'Nome completo do usuário',
  })
  @IsString({ message: 'O nome deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  name: string;

  @ApiProperty({ example: 25, description: 'Idade do usuário' })
  @IsInt({ message: 'A idade deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'A idade é obrigatória.' })
  idade: number;

  @ApiProperty({
    example: 'email@dominio.com',
    description: 'E-mail do usuário',
  })
  @IsEmail({}, { message: 'O e-mail informado é inválido.' })
  @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
  email: string;
}
