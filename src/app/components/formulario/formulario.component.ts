import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  // Objeto
  public object: any = {};

  public ingresando: boolean;

  @ViewChild('formulario', {static: true})
  public formulario: NgForm;

  constructor() { }

  public ngOnInit() {
  }

  public onSubmit() {
    // Validación.
    if (this.formulario.valid) {
      this.ingresando = true;
    }
  }

}
