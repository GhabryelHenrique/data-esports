import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SafePipe } from './pipes/safe.pipe';
import { AuthorizationTokenModule } from './interceptors/authorization-token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzDropDownModule,
    AuthorizationTokenModule,
    NzCarouselModule,
    RouterModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
