import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-hijo23-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-hijo23-2.component.html',
  styleUrls: ['./formulario-hijo23-2.component.css']
})
export class FormularioHijo232Component {
  @Input() operandoA: number | null = null;
  @Input() operandoB: number | null = null;
  @Output() resultadoSuma = new EventEmitter<number>();

  sumar(): void {
    if (this.operandoA !== null && this.operandoB !== null) {
      const resultado = this.operandoA + this.operandoB;
      this.resultadoSuma.emit(resultado); // 🔴 Ahora emitimos el resultado
    } else {
      console.log("Deben introducir valores correctos");
    }
  }
}
