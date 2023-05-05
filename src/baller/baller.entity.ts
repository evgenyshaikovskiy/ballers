import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Baller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  position: string;
}
