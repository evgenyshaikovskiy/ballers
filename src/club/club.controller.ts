import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './club.dto';
import { UpdateClubDto } from './edit-club.dto';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get('index')
  @Render('index_club')
  async viewAllClubs() {
    const all = await this.clubService.all();
    return { clubs: all };
  }

  @Get('create')
  @Render('add_club')
  async showCreateClubForm() {
    return {};
  }

  @Get('view/:name')
  @Render('view_club')
  async showEditClubForm(@Param() params: { name: string }) {
    const club = await this.clubService.getClubByName(params.name);
    return { club: club };
  }

  @Get('delete/:name')
  @Render('index_club')
  async deleteClub(@Param() params: { name: string }) {
    await this.clubService.deleteClubByName(params.name);
    const all = await this.clubService.all();
    return { clubs: all };
  }

  @Post()
  @Render('index_club')
  async createClub(@Body() createClubDto: CreateClubDto) {
    await this.clubService.createClub(createClubDto);
    const all = await this.clubService.all();
    return { clubs: all };
  }

  @Post('update/:name')
  @Render('index_club')
  async editForm(
    @Param() params: { name: string },
    @Body() editClubDto: UpdateClubDto,
  ) {
    await this.clubService.updateClub(params.name, editClubDto.name);
    const all = await this.clubService.all();
    return { clubs: all };
  }
}
