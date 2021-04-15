import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
