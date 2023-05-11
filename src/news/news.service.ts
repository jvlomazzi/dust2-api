import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI, load } from 'cheerio';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(private config: ConfigService) {}

  async findAll(): Promise<News[]> {
    const url = `${this.config.get('BASE_URL')}/${this.config.get(
      'NEWS',
    )}/?offset=0`;

    const body = await (await fetch(url)).text();
    const $ = load(body);
    const results = this.bodyParser($);

    return [
      {
        title: 'Noticia 1',
        date: new Date('2023-05-10T23:41:00'),
        totalComments: 4,
      },
    ];
  }

  private bodyParser($: CheerioAPI) {}
}
