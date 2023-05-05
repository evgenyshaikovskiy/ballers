import { Controller, Get, Post } from '@nestjs/common';
import { ClubService } from './club.service';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  getHello(): string {
    return 'club';
  }

  @Post()
  createBaller(): void {
    // this.ballerService.createBaller();
  }
}
