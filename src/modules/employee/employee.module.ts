import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

const services = [EmployeeService];

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [...services],
  exports: [...services],
})
export class EmployeeModule {}
