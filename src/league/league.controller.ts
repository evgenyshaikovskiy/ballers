import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './league.dto';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get('')
  async getAll() {
    return await this.leagueService.all();
  }

  @Get('/:name')
  async getLeague(@Param() params: { name: string }) {
    return await this.leagueService.getLeagueByName(params.name);
  }

  @Delete('/:name')
  async deleteLeague(@Param() params: { name: string }) {
    return await this.leagueService.deleteLeagueByName(params.name);
  }

  @Post()
  async createLeague(@Body() createLeagueDto: CreateLeagueDto) {
    return await this.leagueService.createLeague(createLeagueDto);
  }

  @Put('/:name')
  async editForm(
    @Param() params: { name: string },
    @Body() editLeagueDto: CreateLeagueDto,
  ) {
    return await this.leagueService.updateLeague(
      params.name,
      editLeagueDto.name,
    );
  }
}
