import { CreateClubDto } from './club.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './club.entity';
import { ClubRepository } from './club.repository';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: ClubRepository,
  ) {}

  public async createClub(createClubDto: CreateClubDto) {
    // this.clubRepository.createClub(createClubDto);
  }

  // crud methods
}
