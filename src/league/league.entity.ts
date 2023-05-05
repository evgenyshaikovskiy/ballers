import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
