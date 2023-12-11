import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  categorias: Categoria [] = []

  constructor(private service: CategoriaService) {}

  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias() {
    this.service.listarCategorias().subscribe((categoria) => {
      this.categorias = categoria;      
    })
  }


  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

}
