import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrbanDictionaryService } from 'src/app/services/urban-dictionary.service';

@Component({
  selector: 'app-buscar-termino',
  templateUrl: './buscar-termino.component.html',
  styleUrls: ['./buscar-termino.component.scss']
})
export class BuscarTerminoComponent implements OnInit {

  public termino: string;

  public buscando: boolean;

  public definiciones: string[] = [];

  @ViewChild('formulario', {static: true})
  public formulario: NgForm;

  public constructor(
    private UrbanDictionaryService: UrbanDictionaryService
    ) {

  }

  public ngOnInit() {

  }

  /**
   * name
   */
  public onSubmit() {
    // Si el formulario es válido.
    if (this.formulario.valid) {
      this.buscando = true;

      // Consumir Servicio
      this.UrbanDictionaryService.define(this.termino).subscribe;{
        Response => {

          this.buscando = false;

          this.definiciones = [];

          for (let i = 0; i < Response.list.length; i++) {
            // Agregar al Diccionario.
            this.definiciones.push( Response.list[i].definition );
          }
        };
      }
    }
  }

}
