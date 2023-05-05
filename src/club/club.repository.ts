import { Repository } from 'typeorm';
import { Club } from './club.entity';
import { CreateClubDto } from './club.dto';

export interface ClubRepository extends Repository<Club> {
  this: Repository<Club>;
  createClub(createClubDto: CreateClubDto): Promise<void>;
}

export const customClubRepository: Pick<Club, any> = {
  async createClub(
    this: Repository<Club>,
    createClubDto: CreateClubDto,
  ): Promise<void> {
    const club = this.create({ ...createClubDto });
    try {
      await this.save(club);
    } catch (error) {
      console.log(error);
    }
  },
};
