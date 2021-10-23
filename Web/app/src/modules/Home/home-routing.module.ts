import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routeslist } from './routes';

const routes: Routes = Routeslist;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
