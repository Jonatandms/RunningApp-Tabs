import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumeTabPage } from './resume-tab.page';

import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ResumeTabPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: ResumeTabPage }])
    ]
})
export class ResumeTabPageModule {}
