import { Component } from '@angular/core';
import { ComponeteHijoComponent } from './componete-hijo/componete-hijo.component';

@Component({
  selector: 'app-componente-padre',
  standalone: true,
  imports: [ComponeteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  componentePadre = 'Este texto probiene del conponente padre';
}
