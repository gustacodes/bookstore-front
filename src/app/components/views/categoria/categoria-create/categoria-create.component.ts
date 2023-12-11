import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})


export class CategoriaCreateComponent {

  formulario: FormGroup

  constructor(private forms: FormBuilder, private service: CategoriaService, private router: Router) {
    this.formulario = forms.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  criarCategoria() {

    this.service.criarCategoria(this.formulario.value).subscribe(() => {
      this.service.mensagem('Categoria criada com sucesso!')
      this.router.navigate(['categorias'])
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })

  }

  cancel() {
    this.router.navigate(['categorias'])
  }

}
