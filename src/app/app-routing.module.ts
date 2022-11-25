import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    redirectTo: 'festas/festas',
    pathMatch: 'full'
  },
  {
    path: 'festas/:id',
    loadChildren: () => import('./festas/festas.module').then( m => m.FestasPageModule)
  },
  {
    path: '',
    redirectTo: 'novafesta/novafesta',
    pathMatch: 'full'
  },
  {
    path: 'novafesta/:id',
    loadChildren: () => import('./novafesta/novafesta.module').then( m => m.NovaFestaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
