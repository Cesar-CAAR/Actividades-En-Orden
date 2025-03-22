import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo22',
  standalone: true,
  imports: [],
  templateUrl: './hijo22.component.html',
  styleUrl: './hijo22.component.css'
})

export class Hijo22Component {
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    // Emitir el evento con un mensaje (se emite un str)
    this.notificarPadre.emit('Mensaje desde el Componente Hijo al Padre');
  }
}
