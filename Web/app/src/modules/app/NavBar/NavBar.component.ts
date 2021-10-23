import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/domain/entities/Routes';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  Routes: Routes[] = [Routes.instance('Inicio', 'home')];
  constructor() {}

  ngOnInit() {}
}
