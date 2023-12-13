import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }


  constructor(private service: CategoriaService, private forms: FormBuilder, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  updateCategoria() {
    this.service.updateCategoria(this.categoria).subscribe((respota) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria atualizada com sucesso!')
    },
    
    err => {
      this.service.mensagem('Verifique se todos os campos estão preenchidos.')
      
    })
  }

  cancel() {
    this.router.navigate(['categorias'])
  }

  findById() {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome
      this.categoria.descricao = resposta.descricao
    })
  }

}
