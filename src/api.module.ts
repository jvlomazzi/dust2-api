import { Module } from '@nestjs/common';
import { RankingController } from './ranking/ranking.controller';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [RankingModule],
})
export class ApiModule {}
