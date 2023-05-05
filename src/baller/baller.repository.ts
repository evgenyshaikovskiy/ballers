import { Repository } from 'typeorm';
import { Baller } from './baller.entity';
import { CreateBallerDto } from './baller.dto';

export interface BallerRepository extends Repository<Baller> {
  this: Repository<Baller>;
  createBaller(createBallerDto: CreateBallerDto): Promise<void>;
}

export const customBallerRepository: Pick<Baller, any> = {
  async createBaller(
    this: Repository<Baller>,
    createBallerDto: CreateBallerDto,
  ): Promise<void> {
    const baller = this.create({ ...createBallerDto });
    try {
      await this.save(baller);
    } catch (error) {
      console.log(error);
    }
  },
};
