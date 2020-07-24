import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductosService } from '../services/productos.service';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  productos: Producto[];

  constructor(private productosService: ProductosService,
              private dataLocalService: DataLocalService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos( event? ) {
    if (!this.productos){

      this.productosService.getProductos()
      .subscribe(res => {
             this.productos = res;
            //  console.log(this.productos);
            //  tslint:disable-next-line: only-arrow-functions
             this.productos.sort( function(a: Producto, b: Producto) {
              if (a.nombre > b.nombre) {
                return 1;
              }
              if (a.nombre < b.nombre) {
                return -1;
              }
              // a must be equal to b
              return 0;
            });
             if (event) {
              // console.log(event.target);
              event.target.complete();
             }
      });

    }
  }


}
