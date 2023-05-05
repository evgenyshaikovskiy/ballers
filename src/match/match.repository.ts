import { CreateMatchDto } from './match.dto';
import { Repository } from 'typeorm';
import { Match } from './match.entity';

export interface MatchRepository extends Repository<Match> {
  this: Repository<Match>;
  createMatch(createMatchDto: CreateMatchDto): Promise<void>;
}

export const customMatchRepository: Pick<Match, any> = {
  async createBaller(
    this: Repository<Match>,
    createMatchDto: CreateMatchDto,
  ): Promise<void> {
    const match = this.create({ ...createMatchDto });
    try {
      await this.save(match);
    } catch (error) {
      console.log(error);
    }
  },
};
