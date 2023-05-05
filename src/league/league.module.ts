import { Module } from '@nestjs/common';
import { League } from './league.entity';
import { customLeagueRepository } from './league.repository';
import { LeagueService } from './league.service';
import {
  TypeOrmModule,
  getRepositoryToken,
  getDataSourceToken,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { LeagueController } from './league.controller';

@Module({
  imports: [TypeOrmModule.forFeature([League])],
  providers: [
    {
      provide: getRepositoryToken(League),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(League).extend(customLeagueRepository);
      },
    },
    LeagueService,
  ],
  controllers: [LeagueController],
})
export class LeagueModule {}
