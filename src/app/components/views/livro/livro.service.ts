import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Livro } from './livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  private URL = enviroment.baseUrl;

  findByAllCategoria(id: String): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.URL}/livros?categoria=${id}`)
  }

  criarLivro(livro: Livro, id: String): Observable<Livro> {
    return this.http.post<Livro>(`${this.URL}/livros?categoria=${id}`, livro)
  }

  removerLivro(id: String) {
    return this.http.delete(`${this.URL}/livros/${id}`)
  }

  findById(id: String): Observable<Livro> {
    return this.http.get<Livro>(`${this.URL}/livros/${id}`)
  }

  updateLivro(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.URL}/livros/${livro.id}`, livro)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
