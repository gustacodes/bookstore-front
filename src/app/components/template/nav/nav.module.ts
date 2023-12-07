import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [NavComponent],

  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],

  exports: [NavComponent]
})

export class NavModule { }
