import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent {

  livro: Livro = {
    id: '',
    titulo: '',
    nomeAutor: '',
    texto: ''
  }

  id_cat!: String

  constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.livro.id = this.route.snapshot.paramMap.get('id_liv')!
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findById();    
  }

  findById() {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro.nomeAutor = resposta.nomeAutor
      this.livro.titulo = resposta.titulo
      this.livro.texto = resposta.texto
    })
  }

  removerLivro() {
    this.service.removerLivro(this.livro.id!).subscribe((resposta) => {
      this.service.mensagem('Livro removido com sucesso!')
      this.router.navigate([`categorias/${this.id_cat}/livros`])
    })
  }

  cancel() {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }
}
