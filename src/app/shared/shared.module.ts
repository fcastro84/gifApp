import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidbarComponent } from './sidbar/sidbar.component';



@NgModule({
  declarations: [
    SidbarComponent
  ],
  exports: [SidbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
