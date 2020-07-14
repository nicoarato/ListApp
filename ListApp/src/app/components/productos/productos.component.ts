import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  @Input() productos: Producto[] = [];
  @Input() enFavoritos = false;
  constructor(private dataLocalService: DataLocalService) { }

  ngOnInit() {}


}
