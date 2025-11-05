import { Body, Controller, Get, Post , Param, ParseIntPipe} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: CreateProductDto) {
     return await this.productService.createProduct(product); 
  }

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get(':id')
  async getProductById(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.productService.getProductById(id);
    } catch (error) {
      throw error;
    }
    
  }

}

