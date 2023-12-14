import { Component, Input } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent {

  displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes'];

  id_cat: String = ''
  livros: Livro [] = []

  constructor(private service: LivroService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.id_cat = this.router.snapshot.paramMap.get('id_cat')!
    this.findAll();
  }

  findAll() {
    this.service.findByAllCategoria(this.id_cat).subscribe((resposta) => {
      this.livros= resposta
    })
  }

}
