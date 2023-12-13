import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Categoria } from './categoria.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  private URL = enviroment.baseUrl;

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.URL}/categorias`)
  }

  criarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.URL}/categorias`, categoria)
  }

  findById(id: String): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.URL}/categorias/${id}`)
  }

  deletarCategoria(id: String): Observable<void> {
    return this.http.delete<void>(`${this.URL}/categorias/${id}`)
  }

  updateCategoria(categoria: Categoria): Observable<void> {
    return this.http.put<void>(`${this.URL}/categorias/${categoria.id}`, categoria)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  
}
