import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

const services = [AuthService];

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [...services],
  exports: [],
})
export class AuthModule {}
