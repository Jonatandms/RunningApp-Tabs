import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilTabPage } from './perfil-tab.page';

import { Tab3PageRoutingModule } from './perfil-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule
  ],
  declarations: [PerfilTabPage]
})
export class PerfilTabPageModule {}
