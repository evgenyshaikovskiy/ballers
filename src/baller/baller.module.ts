import { Baller } from './baller.entity';
import { Module } from '@nestjs/common';
import {
  TypeOrmModule,
  getDataSourceToken,
  getRepositoryToken,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { customBallerRepository } from './baller.repository';
import { BallerController } from './baller.controller';
import { BallerService } from './baller.service';

@Module({
  imports: [TypeOrmModule.forFeature([Baller])],
  providers: [
    {
      provide: getRepositoryToken(Baller),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(Baller).extend(customBallerRepository);
      },
    },
    BallerService,
  ],
  controllers: [BallerController],
})
export class BallerModule {}
