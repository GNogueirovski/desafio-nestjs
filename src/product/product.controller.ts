import { Body, Controller, Get, Post , Param, ParseIntPipe, Patch, Delete, HttpCode} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'O produto foi criado com sucesso' })
  async createProduct(@Body() product: CreateProductDto) {
     return await this.productService.createProduct(product); 
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOkResponse({ description: 'O produto foi atualizado com sucesso' })
  async updateProduct(@Param('id', ParseIntPipe) id: number, @Body() product: UpdateProductDto) {
    return await this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({ description: 'O produto foi deletado com sucesso' })
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteProduct(id);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({ description: 'Lista de produtos retornada com sucesso' })
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOkResponse({ description: 'Produto retornado com sucesso' })
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.productService.getProductById(id);
    } catch (error) {
      throw error;
    }
    
  }

}

