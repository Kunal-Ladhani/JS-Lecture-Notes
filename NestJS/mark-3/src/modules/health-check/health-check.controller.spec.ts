import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health-check.controller';
import { healthCheckRes } from './health-check.dto';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an object with server health status', () => {
    const healthCheckResponse: healthCheckRes = { message: 'Running' };
    expect(controller.getHealth()).toStrictEqual(healthCheckResponse);
  });
});
