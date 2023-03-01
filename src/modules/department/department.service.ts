import { Injectable } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly _employeeService: EmployeeService) {}

  public async get(id: string): Promise<Record<string, unknown>> {
    try {
      const employee = await this._employeeService.get('');
      return { name: 'ZDN', id: '...', employee };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
