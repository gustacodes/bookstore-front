import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent {

  formulario: FormGroup

  constructor(private forms: FormBuilder, private router: Router) {
    this.formulario = forms.group({
      nome: [''],
      descricao: ['']
    })
  }

  atualizarCategoria() {

  }

  cancel() {
    this.router.navigate(['categorias'])
  }

}
