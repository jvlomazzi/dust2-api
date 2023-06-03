import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor() {}

  @Get()
  async findAll() {
    return {
      team1: 'test',
      team2: 'test academy',
      time: '22-10-20 20:10',
    };
  }
}
