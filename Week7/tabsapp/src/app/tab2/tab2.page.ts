import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  alertButtons = [
    {
      text: 'Yes',
      handler: function(){
        console.log('yes button clicked')
      }
    },
    {
      text: 'No',
      handler: function(){
        console.log('no button clicked')
      }
    },
    {
      text: 'Cancel',
      handler: function(){
        console.log('cancel button clicked')
      }
    }
  ];

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'TS alert',
      message: 'A message should be a short, complete sentence.',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

}
