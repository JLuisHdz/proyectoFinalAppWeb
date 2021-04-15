import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { AlertasPage } from '../alertas/alertas.page';
import { ViajeModel } from '../models/viajes';
import { ViajesService } from '../services/viajes.service';
import { CalificarPage } from '../calificar/calificar.page';
import { DatosPage } from '../datos/datos.page';

@Component({
  selector: 'app-menu-passenger',
  templateUrl: './menu-passenger.page.html',
  styleUrls: ['./menu-passenger.page.scss'],
})
export class MenuPassengerPage implements OnInit {

  usuario:string;

  constructor(public modalCtrl: ModalController ,public activeRoute:ActivatedRoute, public router:Router, public actionSheetController: ActionSheetController, private viajeService:ViajesService) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
  }
  viaje: ViajeModel = new ViajeModel(); 

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

  postViajes(){
    console.log(this.viaje); 
    this.viajeService.altaViaje(this.viaje).then((data: any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Viaje Solicitado',
      })
      this.ngOnInit();
    }).catch((err) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ' Ocurrio algo inesperado',
      })
    });
  }
  async Datos() {
    const modal = await this.modalCtrl.create({
      component: DatosPage ,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Datos-modal',
    })

    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Metodo de Pago',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Pago en Efectivo',
        role: 'destructive',
        icon: 'cash-outline',
        handler: () => {
          console.log('Pago en Efectivo');
        }
      }, {
        text: 'Pago con Tarjeta',
        icon: 'journal-outline',
        handler: () => {
          console.log('Pago Por Tarjeta');
        }
      }, {
        text: 'Cancelar',
        icon: 'close-circle-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async Alertas() {
    const modal = await this.modalCtrl.create({
      component: AlertasPage ,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Alertas-modal',
    })

    return await modal.present();
  }
  async CalificarConductor() {
    const modal = await this.modalCtrl.create({
      component: CalificarPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Calificar-modal',
    })
  
    return await modal.present();
  }
 



}
