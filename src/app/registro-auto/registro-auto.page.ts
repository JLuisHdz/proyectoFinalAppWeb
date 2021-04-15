
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RegistroAutoModel } from '../models/registro-auto';
import { RegistroAutoService } from '../services/registro-auto.service';


@Component({
  selector: 'app-registro-auto',
  templateUrl: './registro-auto.page.html',
  styleUrls: ['./registro-auto.page.scss'],
})
export class RegistroAutoPage implements OnInit {

  autos: any;

  constructor(public alertcontroller:AlertController,public router: Router,private _registroauto:RegistroAutoService) { }
  auto : RegistroAutoModel = new RegistroAutoModel();
  ngOnInit() {
  }
  async registroAuto() {
   
    this.router.navigate(['/menu-driver'])
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Confirmación',
      message: 'Datos guardados',
      buttons: ['OK']
    });

    await alert.present();
  }
async close(){
  const alert = await this.alertcontroller.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Cancelada',
    message: 'Operación cancelada.',
    buttons: [' CANCEL']
  });

  await alert.present();
}
getRegistro() {
  this._registroauto.registroAuto(this.autos).then((data: any) =>{
    console.log(data.autos);
    this.autos=data.autos;
  }).catch((err) =>{
    console.log(err);
  })
}
postRegistro(){
  console.log(this.auto); 
  this._registroauto.altaRegistro(this.auto).then((data: any) =>{

    this.ngOnInit();
  }).catch((err) =>{
   
  });
}
}
