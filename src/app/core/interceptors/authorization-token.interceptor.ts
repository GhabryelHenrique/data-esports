import { environment } from './../../../environments/environment';
import { Injectable, NgModule } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationTokenInterceptor implements HttpInterceptor {
  constructor() {}

  dupReq: any;
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      req.url.includes(environment.LOLESPORTSAPI.FEEDLOLAPI) ||
      req.url.includes(environment.LOLESPORTSAPI.ESPORTS_API)
    ) {
      this.dupReq = req.clone({
        headers: req.headers.set(
          'x-api-key',
          environment.LOLESPORTSAPI.TOKEN_ACCESS
        ),
      });
    } else if (req.url.includes(environment.PANDASCORE.BASE_URL)) {
      req.headers.set('Authorization', environment.PANDASCORE.TOKEN_ACCESS);
    }
    return next.handle(this.dupReq);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationTokenInterceptor,
      multi: true,
    },
  ],
})
export class AuthorizationTokenModule {}
