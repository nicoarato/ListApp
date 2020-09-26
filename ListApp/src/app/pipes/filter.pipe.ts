import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: Producto[], texto: string ): any[] {

    // console.log('Entrando al pipe....: ', texto);
    if (texto === ''){
      return arreglo;
    }

    texto = texto.toLowerCase();
    return  arreglo.filter(item => {

      return item.nombre.toLowerCase().includes( texto );

    });


  }

}
