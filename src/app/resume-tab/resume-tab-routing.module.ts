import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeTabPage } from './resume-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ResumeTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeTabPageRoutingModule {}
