import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaUpdateComponent } from './categoria-update.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CategoriaUpdateComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class CategoriaUpdateModule { }
