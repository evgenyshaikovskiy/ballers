import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './match.dto';
import { UpdateMatchDto } from './edit-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getAll() {
    return await this.matchService.all();
  }

  @Get('/:name')
  async getMatch(@Param() params: { name: string }) {
    return await this.matchService.getMatchByName(params.name);
  }

  @Delete('/:name')
  async deleteMatch(@Param() params: { name: string }) {
    return await this.matchService.deleteMatchByName(params.name);
  }

  @Post()
  async createMatch(@Body() createMatchDto: CreateMatchDto) {
    return await this.matchService.createMatch(createMatchDto);
  }

  @Put('/:name')
  async editForm(
    @Param() params: { name: string },
    @Body() editMatchDto: UpdateMatchDto,
  ) {
    return await this.matchService.updateMatch(params.name, editMatchDto);
  }
}
