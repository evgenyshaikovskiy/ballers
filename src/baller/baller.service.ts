import { Injectable, NotFoundException } from '@nestjs/common';
import { Baller } from './baller.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BallerRepository } from './baller.repository';
import { CreateBallerDto } from './baller.dto';
import { ClubService } from 'src/club/club.service';
import { EditBallerDto } from './edit-baller.dto';

@Injectable()
export class BallerService {
  constructor(
    @InjectRepository(Baller)
    private readonly ballerRepository: BallerRepository,
    private readonly clubService: ClubService,
  ) {}

  public async createBaller(createBallerDto: CreateBallerDto) {
    const club = await this.clubService.getClubByName(createBallerDto.clubName);
    return await this.ballerRepository.createBaller(createBallerDto, club);
  }

  public async all() {
    return await this.ballerRepository.find({});
  }

  public async getBallerByFullName(fullName: string) {
    return await this.ballerRepository.findOne({ where: { fullName } });
  }

  public async deleteBallerByFullName(fullName: string) {
    const result = await this.ballerRepository.delete({ fullName: fullName });

    if (result.affected === 0) {
      throw new NotFoundException('No baller is found.');
    }
  }

  public async updateBaller(fullName: string, editBallerDto: EditBallerDto) {
    const toUpdate = await this.ballerRepository.findOne({
      where: { fullName },
    });

    return await this.ballerRepository.save({
      id: toUpdate.id,
      ...editBallerDto,
    });
  }
}
