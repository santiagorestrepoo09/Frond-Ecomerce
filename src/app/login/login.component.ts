import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  username: string = '';
  password: string = '';

  ngOnInit(): void {
  }

  login() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    if (this.username === 'usuario' && this.password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      // Aquí puedes redirigir al usuario a otra página después del inicio de sesión
    } else {
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  }
}