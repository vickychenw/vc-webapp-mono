import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/getData")
  getData(): { message: string } {
    return { message: 'Hello from Nest.js BFF!' };
  }
}
