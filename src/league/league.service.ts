import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { League } from './league.entity';
import { LeagueRepository } from './league.repository';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(League)
    private readonly leagueRepository: LeagueRepository,
  ) {}

  public async createLeague() {
    // this.ballerRepository.createBaller();
  }

  // crud methods
}
