import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo21',
  standalone: true,
  imports: [],
  templateUrl: './hijo21.component.html',
  styleUrl: './hijo21.component.css'
})
export class Hijo21Component {
  // !:operador non-null assertion operator en TypeScript.
  // confíe en que esta propiedad será inicializada
  // Se inicializa desde el componente Padre
  @Input() mensaje!: string;
}
