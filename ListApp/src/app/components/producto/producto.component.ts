import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Input() enFavoritos;
  mensaje = 'Agregar';
  color = 'primary';

  constructor( private dataLocalStorage: DataLocalService ) { }

  ngOnInit() {
    this.estadoBtn();
  }

  agregarProducto(producto) {
    this.dataLocalStorage.guardarProducto(producto);
  }

  borrarProducto(producto) {
    this.dataLocalStorage.borrarProducto(producto);
  }

  estadoBtn() {
    if (this.enFavoritos) {
      this.mensaje = 'Quitar';
      this.color = 'danger';
    }
  }

}
