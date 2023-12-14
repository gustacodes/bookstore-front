import { Component } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent {

  titulo = new FormControl('', Validators.minLength(3))
  nomeAutor = new FormControl('', Validators.minLength(3))
  texto = new FormControl('', Validators.minLength(10))

  livro: Livro = {
    id: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  id_cat!: String

  constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.livro.id = this.route.snapshot.paramMap.get('id_liv')!
    this.findById();
  }

  findById() {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro.titulo = resposta.titulo
      this.livro.nomeAutor = resposta.nomeAutor
      this.livro.texto = resposta.texto
    })
  }

  atualizarLivro() {
    this.service.updateLivro(this.livro).subscribe((respota) => {
      this.service.mensagem('Livro atualizado com sucesso')
      this.router.navigate([`categorias/${this.id_cat}/livros`])
    })
  }

  getMessage() {
    if(this.titulo.invalid) {
      return 'O campo título deve conter mais de 3 caractéres'
    }

    if(this.nomeAutor.invalid) {
      return 'O campo nome do autor deve conter mais de 3 caractéres'
    }

    if(this.texto.invalid) {
      return 'O campo texto deve conter mais de 10 caractéres'
    }

    return false
  }

  cancel() {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

}
