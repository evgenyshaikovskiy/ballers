import { Controller, Get, Post } from '@nestjs/common';
import { LeagueService } from './league.service';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  getHello(): string {
    return 'league';
  }

  @Post()
  createBaller(): void {
    // this.ballerService.createBaller();
  }
}
