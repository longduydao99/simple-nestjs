import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { RegisteRequest } from './auth.controller';

@Injectable()
export class AuthService {
  public async register(payload: RegisteRequest): Promise<string> {
    try {
      const uuid = randomUUID();
      return uuid;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
