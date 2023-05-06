import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './match.dto';
import { UpdateMatchDto } from './edit-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('index')
  @Render('index_match')
  async viewAllMatches() {
    const all = await this.matchService.all();
    return { matches: all };
  }

  @Get('create')
  @Render('add_match')
  async showCreateMatchForm() {
    return {};
  }

  @Get('view/:name')
  @Render('view_match')
  async showEditMatchForm(@Param() params: { name: string }) {
    const match = await this.matchService.getMatchByName(params.name);
    return { match: match };
  }

  @Get('delete/:name')
  @Render('index_match')
  async deleteCMatch(@Param() params: { name: string }) {
    await this.matchService.deleteMatchByName(params.name);
    const all = await this.matchService.all();
    return { matches: all };
  }

  @Post()
  @Render('index_match')
  async createMatch(@Body() createMatchDto: CreateMatchDto) {
    console.log(createMatchDto);
    await this.matchService.createMatch(createMatchDto);
    const all = await this.matchService.all();
    return { matches: all };
  }

  @Post('update/:name')
  @Render('index_match')
  async editForm(
    @Param() params: { name: string },
    @Body() editMatchDto: UpdateMatchDto,
  ) {
    await this.matchService.updateMatch(params.name, editMatchDto);
    const all = await this.matchService.all();
    return { matches: all };
  }
}
