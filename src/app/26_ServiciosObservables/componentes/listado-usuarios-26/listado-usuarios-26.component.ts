import { Component } from '@angular/core';
import { Usuarios26Service } from '../../servicios/usuarios-26.service';

@Component({
  selector: 'app-listado-usuarios-26',
  standalone: true,
  imports: [],
  templateUrl: './listado-usuarios-26.component.html',
  styleUrl: './listado-usuarios-26.component.css'
})

export class ListadoUsuarios26Component {
  usuarios: any[] = [];

  constructor(private usuariosService: Usuarios26Service) {}

  ngOnInit(): void {
    this.usuariosService.obtenerDatos().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
