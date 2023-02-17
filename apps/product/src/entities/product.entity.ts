import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    productId:number;

    @Column({unique:true})
    productName: string;

    @Column()
    price:string;

    @Column()
    rating:number;
}