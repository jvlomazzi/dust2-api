import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CheerioAPI, load } from 'cheerio';
import { News } from './entities/news.entity';
import { toDate } from 'src/helpers/formatter';

@Injectable()
export class NewsService {
  private url: string = `${this.config.get('BASE_URL')}/${this.config.get(
    'NEWS',
  )}/?offset=0`;

  constructor(private config: ConfigService) {}
  /**
   * TODO: create pagination so the function can search multiple offsets
   */
  async findAll(): Promise<News[]> {
    const body = await (await fetch(this.url)).text();
    const $ = load(body);
    const results = this.bodyParser($);

    return results;
  }

  async findById(id: number): Promise<News[]> {
    const body = await (await fetch(this.url)).text();
    const $ = load(body);
    const results = this.bodyParser($);

    return results;
  }
  /**
   * TODO: implement this method
   */
  async findByDate() {}
  /**
   * TODO: implement this method
   */
  async findByPage() {}

  private bodyParser($: CheerioAPI): News[] {
    const content = $('.archive-news-item');
    const news: News[] = [];

    content.map((index, element) => {
      const title: string = $(element).find('.news-item-header').text();
      const date: Date = toDate(
        $(element).parent().find('.group-header').text(),
      );
      const url: string = $(element).find('a').attr('href');
      const totalComments: number = Number(
        $(element).find('.news-item-comments').text().replace(/\D/g, ''),
      );
      const id: number = this.extractIdFromUrl(url);

      news.push({
        id,
        title,
        date,
        url,
        totalComments,
      });
    });

    return news;
  }

  private extractIdFromUrl(url: string): number {
    const regex = /^\/noticias\/(\d+)\/.*/;
    const matches = url.match(regex);
    return parseInt(matches[1], 10);
  }
}
