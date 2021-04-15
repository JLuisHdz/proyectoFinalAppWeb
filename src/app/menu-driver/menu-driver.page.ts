import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ViajeModel } from '../models/viajes';
import { ViajesService } from '../services/viajes.service';
import { DatodPage } from '../datod/datod.page';

@Component({
  selector: 'app-menu-driver',
  templateUrl: './menu-driver.page.html',
  styleUrls: ['./menu-driver.page.scss'],
})
export class MenuDriverPage implements OnInit {
  usuario:string;
  viajes: any;

  constructor(public activeRoute:ActivatedRoute,public modalCtrl: ModalController, public actionSheetController: ActionSheetController, public router:Router, private viajeService:ViajesService) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
   }

   id: ViajeModel = new ViajeModel();

  async Datosd() {
    const modal = await this.modalCtrl.create({
      component: DatodPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'Datos-modal',
    })
  }
  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.getViajes();
  }

  getViajes() {
    this.viajeService.obtenerViajes().then((data: any) =>{
      console.log(data.viajes);
      this.viajes=data.viajes;
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteViajes(id: string){
    this.viajeService.bajaViaje(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Viaje Denegado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}
