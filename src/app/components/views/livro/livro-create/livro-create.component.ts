import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent {

  livro: Livro = {
    id: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  titulo = new FormControl('', Validators.minLength(3))
  nomeAutor = new FormControl('', Validators.minLength(3))
  texto = new FormControl('', Validators.minLength(10))
  id!: String

  constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id_cat')!    
  }

  getMessage() {
    if(this.titulo.invalid) {
      return 'Campo titulo deve conter no mínimo 3 caractéres'
    }

    if(this.nomeAutor.invalid) {
      return 'Campo nome do autor deve conter no mínimo 3 caractéres'
    }

    if(this.texto.invalid) {
      return 'Campo texto deve conter no mínimo 10 caractéres'
    }

    return false
  }

  criarLivro() {
    this.service.criarLivro(this.livro, this.id).subscribe((resposta) => {
    this.service.mensagem('Livro criado com sucesso')
    this.router.navigate([`categorias/${this.id}/livros`])
    })
  }

  cancel() {
    this.router.navigate([`categorias/${this.id}/livros`])
  }
  
}
