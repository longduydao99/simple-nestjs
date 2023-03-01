import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';

@Controller('employees')
@ApiTags('Employee')
export class EmployeeController {
  constructor(private readonly _service: EmployeeService) {}

  @Get(':id')
  public async get(@Param('id') id: string): Promise<Record<string, string>> {
    const employee = await this._service.get(id);
    return employee;
  }
}
