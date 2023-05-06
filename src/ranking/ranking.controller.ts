import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  @Get()
  //@ApiPaginatedResponse(CatDto)
  //findAll(): Observable<{ total: number, limit: number, offset: number, results: CatDto[] }>
  findAll() {
    return 'Ranking';
  }
}
