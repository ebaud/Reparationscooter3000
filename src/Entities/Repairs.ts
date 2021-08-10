import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Scooter } from "./Scooter";

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

    @ManyToOne(type => Scooter, scooter => scooter.repairs)
    scooter: Scooter[];
}