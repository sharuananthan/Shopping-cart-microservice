import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity'; 
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly productsRepository: Repository<Product>
  ) { }
  

  create(createProductDto: CreateProductDto) {
    const product= this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(productId: number) {
    return "This action returns a #${id} product"
  }

  

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}

