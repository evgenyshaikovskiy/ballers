import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BallerModule } from './baller/baller.module';
import { ClubModule } from './club/club.module';
import { LeagueModule } from './league/league.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        url: 'postgres://ballers_postgresql_user:9NMteVx8GZFtKZt5zeLbtyW6U4AncqkN@dpg-chamehorddl1r9vovcl0-a.frankfurt-postgres.render.com/ballers_postgresql?ssl=true',
        port: 5432,
        username: 'ballers_postgresql_user',
        database: 'ballers_postgresql',
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    BallerModule,
    ClubModule,
    LeagueModule,
    MatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
