import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// separate of decorators for routing and services
@Controller() // decorator accepts string '/...'
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
