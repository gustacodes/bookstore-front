import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaReadComponent } from './categoria-read.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CategoriaReadComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],

})
export class CategoriaReadModule { }
