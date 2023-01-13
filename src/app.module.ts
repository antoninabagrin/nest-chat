import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GatewayModule } from './gateway/gataway.module';
import { PusherService } from './pusher.service';

@Module({
  imports: [GatewayModule],
  controllers: [AppController],
  providers: [PusherService],
})
export class AppModule {}
