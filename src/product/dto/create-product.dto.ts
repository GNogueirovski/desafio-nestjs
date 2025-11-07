import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({
        description: 'Nome do produto',
        example: 'Camiseta Polo',
    })
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    @Length(5, 100, { message: 'O nome deve ter entre 5 e 100 caracteres' })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Descrição do produto',
        example: 'Camiseta polo de algodão, tamanho M, cor azul.',
        required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'Preço do produto',
        example: 79.99,
    })
    @IsNotEmpty({ message: 'O preço não pode estar vazio' })
    @Min(0, { message: 'O preço deve ser um número positivo' })
    @IsNumber()
    price: number;
}