import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgestPageRoutingModule } from './badgest-routing.module';

import { BadgestPage } from './badgest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgestPageRoutingModule
  ],
  declarations: [BadgestPage]
})
export class BadgestPageModule {}
