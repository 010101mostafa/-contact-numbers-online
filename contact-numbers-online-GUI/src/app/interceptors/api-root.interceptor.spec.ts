import { TestBed } from '@angular/core/testing';

import { ApiRootInterceptor } from './api-root.interceptor';

describe('ApiRootInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiRootInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiRootInterceptor = TestBed.inject(ApiRootInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
