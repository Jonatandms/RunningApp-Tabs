import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilTabPage } from './perfil-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
