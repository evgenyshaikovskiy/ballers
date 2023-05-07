import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BallerService } from './baller.service';
import { CreateBallerDto } from './baller.dto';
import { EditBallerDto } from './edit-baller.dto';

@Controller('baller')
export class BallerController {
  constructor(private readonly ballerService: BallerService) {}

  @Get()
  async getAll() {
    const all = await this.ballerService.all();
    return { ballers: all };
  }

  @Get('/:name')
  async getEditBaller(@Param() params: { name: string }) {
    return await this.ballerService.getBallerByFullName(params.name);
  }

  @Delete('/:name')
  async deleteBaller(@Param() params: { name: string }) {
    return await this.ballerService.deleteBallerByFullName(params.name);
  }

  @Post()
  async createBaller(@Body() createBallerDto: CreateBallerDto) {
    return await this.ballerService.createBaller(createBallerDto);
  }

  @Put('/:name')
  async editForm(
    @Param() params: { name: string },
    @Body() editBallersDto: EditBallerDto,
  ) {
    return await this.ballerService.updateBaller(params.name, editBallersDto);
  }
}
