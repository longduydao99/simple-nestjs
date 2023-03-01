import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  public async get(id: string): Promise<Record<string, string>> {
    try {
      return { name: 'Long', id: '...' };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
