import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RankingService } from './ranking.service';

// @ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}
  @Get()
  //@ApiPaginatedResponse(CatDto)
  //findAll(): Observable<{ total: number, limit: number, offset: number, results: CatDto[] }>
  async findAll() {
    const results = await this.rankingService.findAll();
    return results;
  }
}
