import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  imageUrl: string | undefined = '';

  constructor() { }

  ngOnInit() {
  }

  takePicture(){
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      // Can be set to the src of an image now
      this.imageUrl = imageUrl;
    };
    takePicture();
  }

  async showLocalNotification(){
    await LocalNotifications.schedule({
      notifications: [
        {id: 1, title: 'Local Notification 1', body: 'Some body 1'},
        {id: 2, title: 'Local Notification 2', body: 'Some body 2', schedule: {at: new Date(new Date().getTime() + 30 * 1000)}}, //at 30 secs
      ],
    });
  }

}
