import { Club } from 'src/club/club.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class League {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Club, (club) => club.league, { onDelete: 'CASCADE' })
  clubs: Club[];
}
