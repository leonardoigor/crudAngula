import { Routes } from '@angular/router';

export const routesList: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./../home/home.module').then((m) => m.HomeModule),
  },
];
