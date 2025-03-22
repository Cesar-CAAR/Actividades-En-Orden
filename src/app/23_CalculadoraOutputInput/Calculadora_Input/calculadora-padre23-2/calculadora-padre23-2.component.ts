import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioHijo232Component } from '../formulario-hijo23-2/formulario-hijo23-2.component';
import { ResultadoHijo232Component } from '../resultado-hijo23-2/resultado-hijo23-2.component';

@Component({
  selector: 'app-calculadora-padre23-2',
  standalone: true,
  imports: [
    FormsModule,
    FormularioHijo232Component,
    ResultadoHijo232Component
  ],
  templateUrl: './calculadora-padre23-2.component.html',
  styleUrl: './calculadora-padre23-2.component.css'
})
export class CalculadoraPadre232Component {
  resultadoPadre: number | null = null;
  
  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
}
