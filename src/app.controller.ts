import { Body, Controller, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  async messages(
    // @Body('username') username: string,
    @Body('date') date: Date,
    @Body('message') message: string,
  ) {
    await this.pusherService.trigger('chat', 'message', {
      // username,
      date,
      message,
    });

    return [];
  }
}
