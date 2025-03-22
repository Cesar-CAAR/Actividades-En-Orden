import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-hijo23-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-hijo23-1.component.html',
  styleUrl: './formulario-hijo23-1.component.css'
})

export class FormularioHijo231Component {
  operandoA: number | null = null;
  operandoB: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar(): void {
    if (this.operandoA && this.operandoB) 
    {
      const resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado);
    }
    else 
    {
      console.log("Deben introducir valores correctos")
    }
  }
}
//hola