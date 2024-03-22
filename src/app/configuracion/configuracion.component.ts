import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuario/usuarios.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})


export class ConfiguracionComponent implements OnInit  {
  constructor(
    public service: UsuariosService,
  ){};
  usuarios: any;

  ngOnInit(): void {
 
  }

  user = {
    name: '',
    apellido: '',
    cedula: '',
    password: '',
  };

  createUser() {
    // Lógica para crear un usuario
    this.service.saveUsuario(this.user).subscribe(resp=>{

    },
    error=> {console.log(error)}
    );
  

    console.log('Usuario creado:', this.user);
  }

  
  readUsers() {
    console.log('Leyendo usuarios...');
    this.service.getAllUsuarios().subscribe(resp=>{
      this.usuarios = resp;
      console.log(resp)
    },
    error=> {console.log(error)});
  }

  updateUser() {
    // Lógica para actualizar un usuario
    console.log('Usuario actualizado:', this.user);
  }

  deleteUser() {
    // Lógica para eliminar un usuario
    console.log('Usuario eliminado:', this.user);
  }


}

