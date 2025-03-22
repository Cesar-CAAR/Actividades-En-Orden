import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo-24',
  standalone: true,
  imports: [],
  templateUrl: './componente-hijo-24.component.html',
  styleUrl: './componente-hijo-24.component.css'
})
export class ComponenteHijo24Component {
  mensaje: string = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje: string) {
    this.mensaje = nuevoMensaje;
  }
}
