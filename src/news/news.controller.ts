import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsService } from './news.service';

@ApiTags('news')
@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Get()
    async findAll() {
        const results = this.newsService.findAll();
        return results;
    }
}
