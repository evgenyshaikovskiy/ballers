import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './club.dto';
import { UpdateClubDto } from './edit-club.dto';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Get()
  async viewAllClubs() {
    return await this.clubService.all();
  }

  @Get('/:name')
  async getClub(@Param() params: { name: string }) {
    return await this.clubService.getClubByName(params.name);
  }

  @Delete('/:name')
  async deleteClub(@Param() params: { name: string }) {
    return await this.clubService.deleteClubByName(params.name);
  }

  @Post()
  async createClub(@Body() createClubDto: CreateClubDto) {
    return await this.clubService.createClub(createClubDto);
  }

  @Put('/:name')
  async editForm(
    @Param() params: { name: string },
    @Body() editClubDto: UpdateClubDto,
  ) {
    return await this.clubService.updateClub(params.name, editClubDto.name);
  }
}
