import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getData() {
    return { message: 'Welcome to app-nest-1!' };
  }
}
