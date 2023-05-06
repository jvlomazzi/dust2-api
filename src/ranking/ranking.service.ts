import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import cheerio, { CheerioAPI } from 'cheerio';
import { Team } from './entities/team.entity';

@Injectable()
export class RankingService {
  constructor(private config: ConfigService) {}

  /**
   * TODO:
   * implement player array and lineUp attribute to response
   */
  async findAll(): Promise<Team[]> {
    const url = `${this.config.get('BASE_URL')}/${this.config.get('RANKING')}`;

    const body = await (await fetch(url)).text();
    const $ = cheerio.load(body);
    const results = this.bodyParser($);

    return results;
  }

  private bodyParser($: CheerioAPI): Team[] {
    const content = $('.ranking-wrapper');
    const teams: Team[] = [];

    content.map((index, element) => {
      const ranking: number = Number(
        $(element).find('.ranking-number').text().replace('#', ''),
      );
      const teamInfo = $(element)
        .find('.ranking-team')
        .find('.ranking-team-info');

      const points: number = Number(
        teamInfo.find('.ranking-team-points').text().replace(/\D/g, ''),
      );
      teamInfo.find('.ranking-team-points').remove();
      const name = teamInfo.text();
      const rankingChange = $(element).find('.ranking-change').text();

      teams.push({
        ranking: ranking,
        name: name,
        points: points,
        rankingChange: rankingChange,
      });
    });

    return teams;
  }
}
