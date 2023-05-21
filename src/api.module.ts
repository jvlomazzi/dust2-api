import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RankingModule,
  ],
})
export class ApiModule {}
