import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ProductoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductosComponent
  ]
})
export class ComponentsModule {
}
