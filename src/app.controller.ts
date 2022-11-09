import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Route to generate the Authorisation Token
  @Get('/login')
  login() {
    return this.appService.login();
  }
}
