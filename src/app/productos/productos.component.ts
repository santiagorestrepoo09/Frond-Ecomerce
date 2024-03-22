import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent  {
  produc = {
    id: '',
    name: '',
    Descripcion: '',
    Precio: '',
    cantidad: ' ',
    Categoria: ''
  };

  createProducto() {
    // Lógica para crear un usuario
    console.log('Usuario creado:', this.produc);
  }

  readProducto() {
    // Lógica para leer usuarios
    console.log('Leyendo usuarios...', this.produc);
  }

  updateProducto() {
    // Lógica para actualizar un usuario
    console.log('Usuario actualizado:', this.produc);
  }

  deleteProducto() {
    // Lógica para eliminar un usuario
    console.log('Usuario eliminado:', this.produc);
  }
}

