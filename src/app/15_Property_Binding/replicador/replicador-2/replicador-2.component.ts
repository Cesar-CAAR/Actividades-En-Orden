import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-replicador-2',
  imports: [FormsModule],
  templateUrl: './replicador-2.component.html',
  styleUrl: './replicador-2.component.css'
})

export class Replicador2Component {
  saludo: string = "Saludo inicial";
}
