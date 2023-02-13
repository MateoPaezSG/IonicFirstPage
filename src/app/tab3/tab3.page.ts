import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['style.css']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Alerta de Ionic',
      message: 'Hola desde Alert Ionic',
      buttons: ['OK', 'Cancel'],
    });
  
    await alert.present();
  }
  async presentAlerto() {
    const alert = await this.alertController.create({
      header: 'hola',
      subHeader: 'ELbicho123',
      message: 'Viva Messi',
      buttons: ['ua', 'au'],
    });
  
    await alert.present();
  }
  async presentAlertodo() {
    const alert = await this.alertController.create({
      header: 'CUIDAO',
      subHeader: 'Mensaje',
      message: 'ay me tocaste',
      buttons: ['hola', 'mundo'],
    });
  
    await alert.present();
  }
}
