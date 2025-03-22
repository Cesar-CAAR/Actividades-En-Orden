import { Component } from '@angular/core';
import { Hijo21Component } from '../hijo21/hijo21.component';

@Component({
  selector: 'app-padre21',
  imports: [Hijo21Component],
  templateUrl: './padre21.component.html',
  styleUrl: './padre21.component.css'
})

export class Padre21Component {
  mensajePadre: string = 'Mensaje desde el Componente Padre';
}
