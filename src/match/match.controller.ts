import { Controller, Get, Post } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  getHello(): string {
    return 'match';
  }

  @Post()
  createBaller(): void {
    // this.ballerService.createBaller();
  }
}
