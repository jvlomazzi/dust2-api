import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RankingModule,
    NewsModule,
  ],
})
export class ApiModule {}
