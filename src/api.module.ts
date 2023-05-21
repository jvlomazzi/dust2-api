import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RankingModule,
    NewsModule,
    AuthModule,
  ],
})
export class ApiModule {}
