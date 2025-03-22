import { Component, ViewChild } from '@angular/core';
import { ComponenteHijo24Component } from '../componente-hijo-24/componente-hijo-24.component';

@Component({
  selector: 'app-componente-padre-24',
  standalone: true,
  imports: [ComponenteHijo24Component],
  templateUrl: './componente-padre-24.component.html',
  styleUrl: './componente-padre-24.component.css'
})

export class ComponentePadre24Component {
  @ViewChild(ComponenteHijo24Component) componenteHijo!: ComponenteHijo24Component;
  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el Componente Padre');
  }
}
