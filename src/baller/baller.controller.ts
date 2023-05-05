import { Controller, Get, Post } from '@nestjs/common';
import { BallerService } from './baller.service';

@Controller('baller')
export class BallerController {
  constructor(private readonly ballerService: BallerService) {}

  @Get()
  getHello(): string {
    return 'baller';
  }

  @Post()
  createBaller(): void {
    // this.ballerService.createBaller();
  }
}
