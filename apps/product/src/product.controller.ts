import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseFilePipe, HttpStatus, ParseFilePipeBuilder } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto); 
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
  
}
