import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus } from '@nestjs/common';

import { HEALTH_PATH } from 'src/common/constants/path.constants';
import { HealthService } from '../services/health.service';

@ApiTags('Microservice status')
@Controller()
export class HealthController {
  constructor(private readonly healthsService: HealthService) {}

  @Get(HEALTH_PATH)
  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({
    description: 'Return status pass',
    status: HttpStatus.OK,
  })
  getStatus(): string {
    return this.healthsService.getStatus();
  }
}
