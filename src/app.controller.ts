import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('admin-room-topic')
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello Admin !';
  }
}
