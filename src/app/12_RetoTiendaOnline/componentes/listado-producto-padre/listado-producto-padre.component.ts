import { Component } from '@angular/core';
import { ProductoHijoComponent } from './producto-hijo/producto-hijo.component';

@Component({
  selector: 'app-listado-producto-padre',
  standalone: true,
  imports: [ProductoHijoComponent],
  templateUrl: './listado-producto-padre.component.html',
  styleUrl: './listado-producto-padre.component.css'
})

export class ListadoProductoPadreComponent {

}
