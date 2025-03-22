import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { PadreComponent } from './11_VariosComponentes/padre/padre.component';
import { ListadoProductoPadreComponent } from './12_RetoTiendaOnline/componentes/listado-producto-padre/listado-producto-padre.component';
import { ComponeteHijoComponent } from './13_EncapsulamientoPropiedades/componente-padre/componete-hijo/componete-hijo.component';
import { ComponentePadreComponent } from './13_EncapsulamientoPropiedades/componente-padre/componente-padre.component';
import { MostrarMensajeComponent } from './14_EventoBinding/mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './15_Property_Binding/replicador/replicador.component';
import { Replicador2Component } from './15_Property_Binding/replicador/replicador-2/replicador-2.component';
import { SaludarComponent } from './16_TwoWayBinding/saludar/saludar.component';
import { ComponenteIfComponent } from './17_Directiva_if/componente-if/componente-if.component';
import { AgregarTareaComponent } from './18_LocalReference/agregar-tarea/agregar-tarea.component';
import { ComponenteForComponent } from './19_Directiva_for/componente-for/componente-for.component';
import { ListadoProductosComponent } from './20_RetoListadoProductos/listado-productos/listado-productos.component';
import { Padre21Component } from './21_DecoradorInput/padre21/padre21.component';
import { Padre22Component } from './22_DecoradorOutput/padre22/padre22.component';
import { CalculadoraPadre231Component } from './23_CalculadoraOutputInput/Calculadora_Output/calculadora-padre23-1/calculadora-padre23-1.component';
import { CalculadoraPadre232Component } from './23_CalculadoraOutputInput/Calculadora_Input/calculadora-padre23-2/calculadora-padre23-2.component';
import { ComponentePadre24Component } from './24_DecoradorViewChild/componente-padre-24/componente-padre-24.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TarjetaProductoComponent,
    PadreComponent,
    ListadoProductoPadreComponent,
    ComponeteHijoComponent,
    ComponentePadreComponent,
    MostrarMensajeComponent,
    ReplicadorComponent,
    Replicador2Component,
    SaludarComponent,
    ComponenteIfComponent,
    AgregarTareaComponent,
    ComponenteForComponent,
    ListadoProductosComponent,
    Padre21Component,
    Padre22Component,
    CalculadoraPadre231Component,
    CalculadoraPadre232Component,
    ComponentePadre24Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProyectoAngularActividades';

  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Cesar Andres',
    edad: 20
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }

  titulo_1 = 'Event Binding en Angular';

  titulo_2 = 'Directiva @if en Angular';

  titulo_3 = 'Local Reference en Angular';

  titulo_4 = 'Directiva @for en Angular';
  
  titulo_5 = 'Directiva @Input en Angular';

  titulo_6 = 'Directiva @Output en Angular';

  titulo_7 = 'Calculadora con Output en Angular';

  titulo_8 = 'Calculadora con Input en Angular';

  titulo_9 = 'Decorador @ViewChild en Angular';
}