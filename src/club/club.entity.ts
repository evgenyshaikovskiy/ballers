import { Baller } from 'src/baller/baller.entity';
import { League } from 'src/league/league.entity';
import { Match } from 'src/match/match.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
  // league and player relationships

  @OneToMany(() => Baller, (baller) => baller.club, { onDelete: 'CASCADE' })
  ballers: Baller[];

  @ManyToOne(() => League, (league) => league.clubs)
  league: League;

  @OneToMany(() => Match, (match) => match.homeClub, { onDelete: 'CASCADE' })
  homeMatches: Match[];

  @OneToMany(() => Match, (match) => match.awayClub, { onDelete: 'CASCADE' })
  awayMatches: Match[];
}
