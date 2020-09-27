import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoCopiado: string;
  constructor(public dataLocalService: DataLocalService,
              private alertController: AlertController) {}


  copiarTexto() {
    this.armartexto();
    this.alerta();

    }


  async armartexto() {
    this.textoCopiado = ' ';
    this.textoCopiado = await this.dataLocalService.armarListaProductos();
    // console.log(this.textoCopiado);
    // navigator.clipboard.readText()
    // .then(() => this.copyMessage(this.textoCopiado));
    this.copyMessage(this.textoCopiado);
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

async alerta() {
      const alert = await this.alertController.create({
        header: 'Lista copiada en el portapales!',
        message: 'Puedes compartir tu lista con quien quieras.',
        buttons: ['Ok']
      });
      await alert.present();
  }

}
