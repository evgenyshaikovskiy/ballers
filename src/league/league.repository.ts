import { CreateLeagueDto } from './league.dto';
import { Repository } from 'typeorm';
import { League } from './league.entity';

export interface LeagueRepository extends Repository<League> {
  this: Repository<League>;
  createLeague(createLeagueDto: CreateLeagueDto): Promise<void>;
}

export const customLeagueRepository: Pick<League, any> = {
  async createLeague(
    this: Repository<League>,
    createLeagueDto: CreateLeagueDto,
  ): Promise<void> {
    const league = this.create({ ...createLeagueDto });
    try {
      await this.save(league);
    } catch (error) {
      console.log(error);
    }
  },
};
