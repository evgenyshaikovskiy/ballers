import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './league.dto';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get('index')
  @Render('index_league')
  async viewAllLeagues() {
    const all = await this.leagueService.all();
    return { leagues: all };
  }

  @Get('create')
  @Render('add_league')
  async showCreateLeagueForm() {
    return {};
  }

  @Get('view/:name')
  @Render('view_league')
  async showEditLeagueForm(@Param() params: { name: string }) {
    const league = await this.leagueService.getLeagueByName(params.name);
    return { league: league };
  }

  @Get('delete/:name')
  @Render('index_league')
  async deleteLeague(@Param() params: { name: string }) {
    await this.leagueService.deleteLeagueByName(params.name);
    const all = await this.leagueService.all();
    return { leagues: all };
  }

  @Post()
  @Render('index_league')
  async createLeague(@Body() createLeagueDto: CreateLeagueDto) {
    await this.leagueService.createLeague(createLeagueDto);
    const all = await this.leagueService.all();
    return { leagues: all };
  }

  @Post('update/:name')
  @Render('index_league')
  async editForm(
    @Param() params: { name: string },
    @Body() editLeagueDto: CreateLeagueDto,
  ) {
    await this.leagueService.updateLeague(params.name, editLeagueDto.name);
    const all = await this.leagueService.all();
    return { leagues: all };
  }
}
