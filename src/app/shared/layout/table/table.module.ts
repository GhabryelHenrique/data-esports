import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    NzTableModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
