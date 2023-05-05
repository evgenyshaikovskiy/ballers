import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchRepository } from './match.repository';
import { Match } from './match.entity';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: MatchRepository,
  ) {}

  public async createMatch() {
    // this.ballerRepository.createBaller();
  }
}
