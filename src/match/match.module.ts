import { Module } from '@nestjs/common';
import { Match } from './match.entity';
import { customMatchRepository } from './match.repository';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import {
  TypeOrmModule,
  getRepositoryToken,
  getDataSourceToken,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  providers: [
    {
      provide: getRepositoryToken(Match),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(Match).extend(customMatchRepository);
      },
    },
    MatchService,
  ],
  controllers: [MatchController],
})
export class MatchModule {}
