import { Repository } from 'typeorm';
import { Club } from './club.entity';
import { League } from 'src/league/league.entity';

export interface ClubRepository extends Repository<Club> {
  this: Repository<Club>;
  createClub(name: string, league: League): Promise<void>;
}

export const customClubRepository: Pick<Club, any> = {
  async createClub(
    this: Repository<Club>,
    name: string,
    league: League,
  ): Promise<void> {
    const club = this.create({ name: name, league: league });
    try {
      await this.save(club);
    } catch (error) {
      console.log(error);
    }
  },
};
