import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioHijo231Component } from '../formulario-hijo23-1/formulario-hijo23-1.component';

@Component({
  selector: 'app-calculadora-padre23-1',
  imports: [FormsModule, FormularioHijo231Component],
  templateUrl: './calculadora-padre23-1.component.html',
  styleUrl: './calculadora-padre23-1.component.css'
})
export class CalculadoraPadre231Component {
  resultado: number | null = null;

  procesarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
