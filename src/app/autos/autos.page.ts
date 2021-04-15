import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegistroAutoModel } from '../models/registro-auto';
import { RegistroAutoService } from '../services/registro-auto.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  autos: any;

  constructor(private autoService: RegistroAutoService) { }

  id: RegistroAutoModel = new RegistroAutoModel();

  ngOnInit() {
    this.getAuto();
  }

  getAuto() {
    this.autoService.obtenerRegistro().then((data: any) =>{
      console.log(data.autos);
      this.autos=data.autos;
    }).catch((err) =>{
      console.log(err);
    })
  }

  deleteAutos(id: string){
    this.autoService.bajaRegistro(id).then((data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Exito',
        text: 'Auto Eliminado',
      })
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);
    });
      
  }

}
