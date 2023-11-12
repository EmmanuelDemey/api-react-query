import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { AppService, Person } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPeople(@Query('page') page: number): Person[] {
    return this.appService.getPeople(page);
  }

  @Get(':id')
  getPerson(@Param('id') id: string): Person {
    return this.appService.getPerson(id);
  }

  @Put(':id')
  updatePerson(@Param('id') id: string, @Body() person: Person): Person {
    return this.appService.updatePeople(id, person);
  }
}
