import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI, load } from 'cheerio';
import { Player, Team } from './entities/team.entity';

@Injectable()
export class RankingService {
  constructor(private config: ConfigService) {}

  async findAll(): Promise<Team[]> {
    const url = `${this.config.get('BASE_URL')}/${this.config.get('RANKING')}`;

    const body = await (await fetch(url)).text();
    const $ = load(body);
    const results = this.bodyParser($);

    return results;
  }

  private bodyParser($: CheerioAPI): Team[] {
    const content = $('.ranking-container');
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

      /**
       * TODO: nationality is obtained by title attribute from player flag img,
       * some players doesnt have title attr defined
       * suggestion: get by flag url name
       */
      const lineUpContent = $(element).find('.lineup-player-nickname');
      const lineUp: Player[] = [];
      lineUpContent.each((index, element) => {
        lineUp.push({
          nickname: $(element).text(),
          nationality: $(element).find('.flag').attr('title'),
        });
      });

      teams.push({
        ranking: ranking,
        name: name,
        points: points,
        rankingChange: rankingChange,
        lineUp: lineUp,
      });
    });

    return teams;
  }
}
