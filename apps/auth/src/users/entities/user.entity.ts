import {Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    userId:number;

    @Column({unique:true})
    userName: string;

    @Column()
    email:string;

    @Column()
    password:string;
}

    