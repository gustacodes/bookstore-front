import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
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


  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  
}
