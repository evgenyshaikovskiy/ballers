import { Module } from '@nestjs/common';
import { customClubRepository } from './club.repository';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import {
  TypeOrmModule,
  getRepositoryToken,
  getDataSourceToken,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Club } from './club.entity';
import { LeagueModule } from 'src/league/league.module';

@Module({
  imports: [TypeOrmModule.forFeature([Club]), LeagueModule],
  providers: [
    {
      provide: getRepositoryToken(Club),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(Club).extend(customClubRepository);
      },
    },
    ClubService,
  ],
  controllers: [ClubController],
  exports: [ClubService],
})
export class ClubModule {}
