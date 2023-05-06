import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { League } from './league.entity';
import { LeagueRepository } from './league.repository';
import { CreateLeagueDto } from './league.dto';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(League)
    private readonly leagueRepository: LeagueRepository,
  ) {}

  public async createLeague(createLeagueDto: CreateLeagueDto) {
    return await this.leagueRepository.createLeague(createLeagueDto);
  }

  public async all() {
    return await this.leagueRepository.find({});
  }

  public async getLeagueByName(name: string) {
    return await this.leagueRepository.findOne({ where: { name } });
  }

  public async deleteLeagueByName(name: string) {
    const result = await this.leagueRepository.delete({ name });
    if (result.affected == 0) {
      throw new NotFoundException('No league is exists');
    }
  }

  public async updateLeague(oldName: string, newName: string) {
    const toUpdate = await this.leagueRepository.findOne({
      where: { name: oldName },
    });

    return await this.leagueRepository.save({
      id: toUpdate.id,
      name: newName,
      clubs: toUpdate.clubs,
    });
  }
}
