import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Producto } from '../interfaces/producto.interface';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  productos: Producto[] = [];
  constructor(private storage: Storage,
              public toastController: ToastController) {
                this.cargarFavoritos();

              }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
                  message,
                  duration: 300
                });
    toast.present();
    }

    guardarProducto(producto: Producto) {
        const existe = this.productos.find( prod => prod.nombre === producto.nombre);
        if ( !existe ) {
              this.productos.unshift(producto);
              // tslint:disable-next-line: only-arrow-functions
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
              this.storage.set('favoritos', this.productos);
        }
        this.presentToast(`Agregado ${producto.nombre} a la Lista`);
    }

    async cargarFavoritos() {

      const favoritos = await this.storage.get('favoritos');
      if (favoritos) {
        this.productos = favoritos;
      }
    }

    borrarProducto(producto: Producto) {
      this.productos = this.productos.filter( prod => prod.nombre !== producto.nombre );
      this.storage.set('favoritos', this.productos);
      this.presentToast('Borrado de la Lista');
    }

   async  limpiarTodo() {
      const favoritos = await this.storage.clear();
      this.cargarFavoritos();
    }
}
