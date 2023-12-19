import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/sampleData")
  getSampleData() {
    return this.appService.getData();
  }
  @Get()
  getData() {
    return this.getSampleData();
  }



}
