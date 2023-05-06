import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchRepository } from './match.repository';
import { Match } from './match.entity';
import { CreateMatchDto } from './match.dto';
import { ClubService } from 'src/club/club.service';
import { UpdateMatchDto } from './edit-match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: MatchRepository,
    private readonly clubService: ClubService,
  ) {}

  public async createMatch(createMatchDto: CreateMatchDto) {
    const awayClub = await this.clubService.getClubByName(
      createMatchDto.awayClubName,
    );

    const homeClub = await this.clubService.getClubByName(
      createMatchDto.homeClubName,
    );

    return await this.matchRepository.createMatch(
      createMatchDto,
      homeClub,
      awayClub,
    );
  }

  public async all() {
    return await this.matchRepository.find({});
  }

  public async getMatchByName(name: string) {
    return await this.matchRepository.findOne({ where: { name } });
  }

  public async deleteMatchByName(name: string) {
    const result = await this.matchRepository.delete({ name });

    if (result.affected == 0) {
      throw new NotFoundException('No match is found');
    }
  }

  public async updateMatch(oldName: string, updateMatchDto: UpdateMatchDto) {
    const toUpdate = await this.matchRepository.findOne({
      where: { name: oldName },
    });

    return await this.matchRepository.save({
      id: toUpdate.id,
      name: updateMatchDto.name,
      scoreHome: updateMatchDto.scoreHome,
      scoreAway: updateMatchDto.scoreAway,
    });
  }
}
