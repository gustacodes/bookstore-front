import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaReadComponent } from './categoria-read.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LivroReadAllComponent } from '../../livro/livro-read-all/livro-read-all.component';
import { LivroModule } from '../../livro/livro.module';

@NgModule({
  declarations: [CategoriaReadComponent],

  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule,
    LivroModule
  ],

  exports: [CategoriaReadComponent]

})

export class CategoriaReadModule { }
