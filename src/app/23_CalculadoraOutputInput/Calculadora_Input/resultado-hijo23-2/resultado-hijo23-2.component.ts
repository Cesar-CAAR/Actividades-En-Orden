import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-hijo23-2',
  standalone: true,
  imports: [],
  templateUrl: './resultado-hijo23-2.component.html',
  styleUrl: './resultado-hijo23-2.component.css'
})
export class ResultadoHijo232Component {
  @Input() resultadoHijo: number | null = null;
}
