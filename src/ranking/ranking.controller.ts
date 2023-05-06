import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  @Get()
  findAll() {
    return 'Ranking';
  }
}
