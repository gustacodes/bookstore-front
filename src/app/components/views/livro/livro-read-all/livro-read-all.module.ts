import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroReadAllComponent } from './livro-read-all.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LivroReadAllComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule
  ],

  exports: [LivroReadAllComponent]
})

export class LivroReadAllModule { }
