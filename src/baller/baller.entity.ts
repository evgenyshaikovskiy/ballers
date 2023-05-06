import { Club } from 'src/club/club.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Baller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  fullName: string;

  @Column()
  age: number;

  @Column()
  position: string;

  @ManyToOne(() => Club, (club) => club.ballers)
  club: Club;
}
