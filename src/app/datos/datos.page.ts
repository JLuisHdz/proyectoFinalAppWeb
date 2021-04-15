import { Component, OnInit } from '@angular/core';
import { DatospService } from '../services/datosp.service';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@Capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatospModel } from '../models/datosp';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  fotoPerfil = "assets/icon/uploadf.jpg"
  fotousuario : SafeResourceUrl
  images: any = []
  constructor(public modalCtrl: ModalController, private sanitizer: DomSanitizer, private _datosService: DatospService) { }
  datosp: DatospModel = new DatospModel();

 Agregardatos(){
   
 }
 async tomarFoto() {
  const image = await Plugins.Camera.getPhoto(
    {
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    }
  );
  console.log(image)
  this.fotousuario = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);
  this.fotoPerfil = image.dataUrl;
}

async dismiss() {
  return await this.modalCtrl.dismiss();
}

getDatos() {
  this._datosService.getDatos().then((data: any) =>{
    console.log(data.datosp);
    this.datosp=data.datosp;
  }).catch((err) =>{
    console.log(err);
  })
}

postDatos(){
  console.log(this.datosp); 
  this._datosService.postDatos(this.datosp).then((data: any) =>{
    
    this.ngOnInit();
  }).catch((err) =>{
   
  });
}
  ngOnInit() {
  }

}
