import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}