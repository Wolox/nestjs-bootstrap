import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from 'src/app.module';
import { HealthController } from 'src/domain/health/controllers/health.controller';
import { HEALTH_PATH } from 'src/common/constants/path.constants';
import { HealthService } from 'src/domain/health/services/health.service';

describe('Health check suite test 🧪', () => {
  let app: INestApplication;
  let controller: HealthController;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [AppModule],
      providers: [HealthService],
    }).compile();

    app = moduleFixture.createNestApplication();
    controller = moduleFixture.get<HealthController>(HealthController);

    await app.init();
  });

  test('HealthController should be defined ✅', () => {
    expect(controller).toBeDefined();
  });

  test(`${HEALTH_PATH} (GET) should be return a 200 status ✅`, async () =>
    await request(app.getHttpServer()).get(HEALTH_PATH).expect(HttpStatus.OK));

  test(`${HEALTH_PATH} (GET) should be return status pass ✅`, async () =>
    await request(app.getHttpServer()).get(HEALTH_PATH).expect('OK'));
});
