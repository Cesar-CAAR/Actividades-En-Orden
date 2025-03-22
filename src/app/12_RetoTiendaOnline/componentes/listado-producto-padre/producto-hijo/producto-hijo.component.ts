import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-hijo',
  standalone: true,
  imports: [],
  templateUrl: './producto-hijo.component.html',
  styleUrl: './producto-hijo.component.css'
})

export class ProductoHijoComponent {
  description = 'Nuevo producto';
  precio = 100;
}
