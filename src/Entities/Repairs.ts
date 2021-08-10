import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Repairs {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    shortName: string;

    @Column()
    description: string;

    @Column()
    price: number;
}