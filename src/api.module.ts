import { Module } from '@nestjs/common';
import { RankingController } from './ranking/ranking.controller';

@Module({
  controllers: [RankingController],
})
export class ApiModule {}
