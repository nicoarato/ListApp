import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) { }

  getProductos() {
    return this.http.get<Producto[]>('https://listasuper-cae6f.firebaseio.com/productos.json');
  }
}
