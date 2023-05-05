import { Injectable } from '@nestjs/common';
import { Baller } from './baller.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BallerRepository } from './baller.repository';

@Injectable()
export class BallerService {
  constructor(
    @InjectRepository(Baller)
    private readonly ballerRepository: BallerRepository,
  ) {}

  public async createBaller(firstName: string, lastName: string) {
    // this.ballerRepository.createBaller();
  }

  // crud methods
}
