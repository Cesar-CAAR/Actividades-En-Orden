import { Component } from '@angular/core';

@Component({
  selector: 'app-componete-hijo',
  imports: [],
  templateUrl: './componete-hijo.component.html',
  styleUrl: './componete-hijo.component.css'
})

export class ComponeteHijoComponent {
  private titulo = "Orgullo UTS";
  //ProyectoAngularActividades

  // Metodo para mostrar el titulo en TypeScript
  // cuando la variable es privada
  get mostrarTitulo(): string {
    return this.titulo;
  }


  // Metodo para mostrar el titulo en JavaScript
  // cuando la variable es privada
  getTitulo(): string {
    return this.titulo;
  }
}