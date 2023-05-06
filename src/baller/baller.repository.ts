import { Repository } from 'typeorm';
import { Baller } from './baller.entity';
import { CreateBallerDto } from './baller.dto';
import { Club } from 'src/club/club.entity';

export interface BallerRepository extends Repository<Baller> {
  this: Repository<Baller>;
  createBaller(createBallerDto: CreateBallerDto, club: Club): Promise<void>;
}

export const customBallerRepository: Pick<Baller, any> = {
  async createBaller(
    this: Repository<Baller>,
    createBallerDto: CreateBallerDto,
    club: Club,
  ): Promise<void> {
    const baller = this.create({
      fullName: createBallerDto.fullName,
      age: createBallerDto.age,
      position: createBallerDto.position,
      club: club,
    });
    try {
      await this.save(baller);
    } catch (error) {
      console.log(error);
    }
  },
};
