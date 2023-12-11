import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private router: Router, private service: CategoriaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  cancel() {
    this.router.navigate(['categorias'])
  }

  findById() {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
        this.categoria.nome = resposta.nome
        this.categoria.descricao =resposta.descricao            
    })
  }


  deletarCategoria() {
    this.service.deletarCategoria(this.categoria.id!).subscribe(() => {
        this.service.mensagem('Categoria removida.')
        this.router.navigate(['categorias'])
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }


}
