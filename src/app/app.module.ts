import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './components/template/nav/nav.module';
import { HeaderModule } from './components/template/header/header.module';
import { FooterModule } from './components/template/footer/footer.module';
import { HomeModule } from './components/views/home/home.module';
import { CategoriaReadModule } from './components/views/categoria/categoria-read/categoria-read.module';
import { CategoriaCreateModule } from './components/views/categoria/categoria-create/categoria-create.module';
import { CategoriaDeleteModule } from './components/views/categoria/categoria-delete/categoria-delete.module';
import { CategoriaUpdateModule } from './components/views/categoria/categoria-update/categoria-update.module';
import { LivroReadAllModule } from './components/views/livro/livro-read-all/livro-read-all.module';
import { LivroCreateModule } from './components/views/livro/livro-create/livro-create.module';
import { LivroDeleteModule } from './components/views/livro/livro-delete/livro-delete.module';
import { LivroUpdateModule } from './components/views/livro/livro-update/livro-update.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    CategoriaReadModule,
    CategoriaCreateModule,
    CategoriaDeleteModule,
    CategoriaUpdateModule,
    LivroReadAllModule,
    LivroCreateModule,
    LivroDeleteModule,
    LivroUpdateModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
