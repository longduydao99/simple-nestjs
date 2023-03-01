import { Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AuthService } from './auth.service';

export class RegisteRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pwd: string;
}

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly _service: AuthService) {}

  @Post()
  public async get(@Body() payload: RegisteRequest): Promise<string> {
    const token = await this._service.register(payload);
    return token;
  }
}
