import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaReadComponent } from './categoria-read.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CategoriaReadComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule
  ],

})
export class CategoriaReadModule { }
