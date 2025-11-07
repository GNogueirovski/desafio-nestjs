import { ApiProperty } from '@nestjs/swagger';
import {IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
    @ApiProperty({
        description: 'Nome do produto',
        example: 'Camiseta Polo',
        required: false,
    })
    @IsOptional()
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
        required: false,
    })
    @IsOptional()
    @IsNumber()
    price: number;
}