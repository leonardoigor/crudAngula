import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BookComponent } from './Components/Book/Book.component';
import { HomeComponent } from './Components/Home/Home.component';

@NgModule({
  declarations: [BookComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [BookComponent, HomeComponent],
})
export class HomeModule {}
