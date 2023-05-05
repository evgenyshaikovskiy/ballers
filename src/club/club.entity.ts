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

  @Column()
  name: string;
  // league and player relationships

  @OneToMany(() => Baller, (baller) => baller.club)
  ballers: Baller[];

  @ManyToOne(() => League, (league) => league.clubs)
  league: League;

  @OneToMany(() => Match, (match) => match.homeClub)
  homeMatches: Match[];

  @OneToMany(() => Match, (match) => match.awayClub)
  awayMatches: Match[];
}
