import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { healthCheckRes } from './health-check.dto';

@ApiTags('Health')
@Controller('health')
export class HealthCheckController {
  @Get()
  getHealth(): healthCheckRes {
    return { message: 'Running' };
  }
}
