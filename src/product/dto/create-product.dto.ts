import { IsNotEmpty, IsOptional, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    @Length(5, 100, { message: 'O nome deve ter entre 5 e 100 caracteres' })
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty({ message: 'O preço não pode estar vazio' })
    @Min(0, { message: 'O preço deve ser um número positivo' })
    @IsNumber()
    price: number;
}