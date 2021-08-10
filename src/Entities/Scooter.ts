import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Repairs } from "./Repairs";

@Entity()
export class Scooter {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column()
    enginePower: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    mileage: number;

    @OneToMany(type => Repairs, repairs => repairs.scooter)
    repairs: Repairs[];
}