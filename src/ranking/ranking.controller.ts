import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RankingService } from './ranking.service';
import { Team } from './entities/team.entity';

// @ApiBearerAuth()
@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}
  @Get()

  //@ApiPaginatedResponse(CatDto)
  async findAll(): Promise<Team[]> {
    const results = await this.rankingService.findAll();
    return results;
  }
}
