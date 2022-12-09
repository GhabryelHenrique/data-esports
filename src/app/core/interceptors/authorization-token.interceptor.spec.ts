import { TestBed } from '@angular/core/testing';

import { AuthorizationTokenInterceptor } from './authorization-token.interceptor';

describe('AuthTokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthorizationTokenInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AuthorizationTokenInterceptor = TestBed.inject(
      AuthorizationTokenInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
