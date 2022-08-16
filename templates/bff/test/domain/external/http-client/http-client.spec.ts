import { Test, TestingModule } from '@nestjs/testing';

import { AxiosResponse } from 'axios';
import { HttpClientService } from 'src/domain/external/http-client/services/http-client.service';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { axiosConfig } from 'test/mocks/external/http-client/axiox-config.mock';

describe('httpClient Service suite test 🧪', () => {
  let httpClientService: HttpClientService;

  beforeEach(async () => {
    const httpServiceAxios = {
      provide: HttpService,
      useFactory: () => ({
        request: jest.fn(() => {
          return new Observable<AxiosResponse>();
        }),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpClientService, httpServiceAxios],
    }).compile();

    httpClientService = module.get<HttpClientService>(HttpClientService);
  });

  test('should be defined ✅', () => expect(httpClientService).toBeDefined());

  describe('request 🧪', () => {
    test('should be defined ✅', () =>
      expect(httpClientService.request).toBeDefined());

    test('testing request ✅', () =>
      expect(httpClientService.request(axiosConfig)).toEqual({}));
  });
});
