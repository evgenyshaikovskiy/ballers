import { CreateMatchDto } from './match.dto';
import { Repository } from 'typeorm';
import { Match } from './match.entity';
import { Club } from 'src/club/club.entity';

export interface MatchRepository extends Repository<Match> {
  this: Repository<Match>;
  createMatch(
    createMatchDto: CreateMatchDto,
    homeClub: Club,
    awayClub: Club,
  ): Promise<void>;
}

export const customMatchRepository: Pick<Match, any> = {
  async createBaller(
    this: Repository<Match>,
    createMatchDto: CreateMatchDto,
    homeClub: Club,
    awayClub: Club,
  ): Promise<void> {
    const match = this.create({
      name: createMatchDto.name,
      scoreAway: createMatchDto.scoreAway,
      scoreHome: createMatchDto.scoreHome,
      awayClub: awayClub,
      homeClub: homeClub,
    });
    try {
      await this.save(match);
    } catch (error) {
      console.log(error);
    }
  },
};
