import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'resume-tab',
        loadChildren: () => import('../resume-tab/resume-tab.module').then(m => m.ResumeTabPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../rutinas-tab/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../perfil-tab/perfil-tab.module').then(m => m.PerfilTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/resume-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/resume-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
