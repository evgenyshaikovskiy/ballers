import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { BallerService } from './baller.service';
import { CreateBallerDto } from './baller.dto';
import { EditBallerDto } from './edit-baller.dto';

@Controller('baller')
export class BallerController {
  constructor(private readonly ballerService: BallerService) {}

  @Get('index')
  @Render('index_baller')
  async viewAllBallers() {
    Redirect('http://localhost:3000/baller/index');
    const all = await this.ballerService.all();
    return { ballers: all };
  }

  @Get('create')
  @Render('add_baller')
  async showCreateBallerForm() {
    return {};
  }

  @Get('view/:name')
  @Render('view_baller')
  async showEditBallerForm(@Param() params: { name: string }) {
    const baller = await this.ballerService.getBallerByFullName(params.name);
    return { baller: baller };
  }

  @Get('delete/:name')
  @Render('index_baller')
  async deleteBaller(@Param() params: { name: string }) {
    Redirect('http://localhost:3000/baller/index');
    await this.ballerService.deleteBallerByFullName(params.name);
    const all = await this.ballerService.all();
    return { ballers: all };
  }

  @Post()
  @Render('index_baller')
  async createBaller(@Body() createBallerDto: CreateBallerDto) {
    Redirect('http://localhost:3000/baller/index');

    await this.ballerService.createBaller(createBallerDto);
    const all = await this.ballerService.all();
    return { ballers: all };
  }

  @Post('update/:name')
  @Render('index_baller')
  async editForm(
    @Param() params: { name: string },
    @Body() editBallersDto: EditBallerDto,
  ) {
    await this.ballerService.updateBaller(params.name, editBallersDto);
    const all = await this.ballerService.all();
    return { ballers: all };
  }
}
