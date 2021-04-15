import { Component, OnInit } from '@angular/core';
import { datosService } from '../services/datos.service';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@Capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatosModel } from '../models/datos';

@Component({
  selector: 'app-datod',
  templateUrl: './datod.page.html',
  styleUrls: ['./datod.page.scss'],
})
export class DatodPage implements OnInit {
  fotoPerfil = "assets/icon/uploadd.jpg"
  fotousuario : SafeResourceUrl
  images: any = []
  constructor(public modalCtrl: ModalController, private sanitizer: DomSanitizer, private _datodService: datosService) { }
  datosd: DatosModel = new DatosModel();

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
   this._datodService.getDatos().then((data: any) =>{
     console.log(data.datosd);
     this.datosd=data.datosd;
   }).catch((err) =>{
     console.log(err);
   })
 }
 
 postDatos(){
   console.log(this.datosd); 
   this._datodService.postDatos(this.datosd).then((data: any) =>{
     
     this.ngOnInit();
   }).catch((err) =>{
    
   });
 }
  ngOnInit() {
  }
}
