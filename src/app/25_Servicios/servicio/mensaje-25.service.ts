import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Mensaje25Service {

  private mensaje: string = 'Hola desde el servicio de Mensajes!';
  
  obtenerMensaje(): string {
    return this.mensaje;
  }
}
