import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data
    });
  }

  async getProducts() {
    const products = await this.prisma.product.findMany();
    return products;

  }

  async getProductById(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id }
    });

    if (!product) {
      throw new HttpException('Não existe um produto com esse ID', HttpStatus.NOT_FOUND);
    }
    return product;
  }

    async updateProduct(id: number, data: Prisma.ProductUpdateInput) {
    const product = await this.getProductById(id);
    return this.prisma.product.update({
      where: { id },
      data
    });
  }

  async deleteProduct(id: number) {
    await this.getProductById(id);
    return this.prisma.product.delete({
      where: { id }
    });
  }

}