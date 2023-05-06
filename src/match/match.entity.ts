import { Club } from 'src/club/club.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Club, (club) => club.homeMatches)
  homeClub: Club;

  @ManyToOne(() => Club, (club) => club.awayMatches)
  awayClub: Club;

  @Column()
  scoreHome: number;

  @Column()
  scoreAway: number;
}
