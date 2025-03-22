import { Component } from '@angular/core';
import { Hijo22Component } from '../hijo22/hijo22.component';

@Component({
  selector: 'app-padre22',
  standalone: true,
  imports: [Hijo22Component],
  templateUrl: './padre22.component.html',
  styleUrl: './padre22.component.css'
})

export class Padre22Component {
  mensaje: string = '';

  // Se emitió un str, es lo que recibimos
  recibirNotificacion(mensaje: string) {
    this.mensaje = mensaje;
  }
}
