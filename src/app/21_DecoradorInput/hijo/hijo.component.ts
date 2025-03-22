import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})

export class HijoComponent {
  // !:operador non-null assertion operator en TypeScript.
  // confíe en que esta propiedad será inicializada
  // Se inicializa desde el componente Padre
  @Input('nombreEnPlantilla') mensaje!: string;
}
