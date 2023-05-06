import { CreateClubDto } from './club.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { ClubRepository } from './club.repository';
import { LeagueService } from 'src/league/league.service';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: ClubRepository,
    private readonly leagueService: LeagueService,
  ) {}

  public async createClub(createClubDto: CreateClubDto) {
    const league = await this.leagueService.getLeagueByName(
      createClubDto.league_name,
    );

    console.log(league);
    return await this.clubRepository.createClub(createClubDto.name, league);
  }

  public async all() {
    return await this.clubRepository.find({});
  }

  public async getClubByName(name: string) {
    return await this.clubRepository.findOne({ where: { name } });
  }

  public async deleteClubByName(name: string) {
    const result = await this.clubRepository.delete({ name });
    if (result.affected == 0) {
      throw new NotFoundException('No club is found');
    }
  }

  public async updateClub(oldName: string, newName: string) {
    const toUpdate = await this.clubRepository.findOne({
      where: { name: oldName },
    });

    return await this.clubRepository.save({
      id: toUpdate.id,
      name: newName,
    });
  }
}
