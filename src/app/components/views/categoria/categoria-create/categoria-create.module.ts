import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaCreateComponent } from './categoria-create.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CategoriaCreateComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class CategoriaCreateModule { }
