import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumeComponent  } from './resume.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ResumeComponent],
  exports: [ResumeComponent]
})
export class ResumeComponentModule {}
