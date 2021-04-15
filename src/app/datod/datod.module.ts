import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatodPageRoutingModule } from './datod-routing.module';

import { DatodPage } from './datod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatodPageRoutingModule
  ],
  declarations: [DatodPage]
})
export class DatodPageModule {}
