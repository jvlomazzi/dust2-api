import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NewsService {
    constructor(private config: ConfigService) { }
    async findAll() {
        return { mock: 'teste' }
    }
}
