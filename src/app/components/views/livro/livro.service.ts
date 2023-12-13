import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  constructor(private http: HttpClient) { }

  private URL = enviroment.baseUrl;

  findByAllCategoria(id: String): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.URL}/livros?categoria=${id}`)
  }

}
