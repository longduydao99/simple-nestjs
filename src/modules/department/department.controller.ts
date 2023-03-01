import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';

@Controller('departments')
@ApiTags('Department')
export class DepartmentController {
  constructor(private readonly _service: DepartmentService) {}

  @Get(':id')
  public async get(@Param('id') id: string): Promise<Record<string, unknown>> {
    const dep = await this._service.get(id);
    return dep;
  }
}
