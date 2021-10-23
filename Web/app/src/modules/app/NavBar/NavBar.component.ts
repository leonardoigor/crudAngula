import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/domain/entities/Routes';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  Routes: Routes[] = [Routes.instance('Inicio', 'home')];

  btnClicked: boolean = true;

  menuButtonCkick(active: boolean = false) {
    let btn = document.getElementById('mobile-nav');

    if (btn) {
      if (this.btnClicked && active) {
        btn!.style.transform = 'translateX(0%)';
      } else {
        btn!.style.transform = 'translateX(-105%)';
      }
      this.btnClicked = !this.btnClicked;
    }
  }

  constructor() {
    document.body.onclick = (e) => {
      let icon = document.getElementById('menuIcon');
      let equal = e.target === icon;
      if (!equal) {
        this.menuButtonCkick();
      }
      //
    };
  }

  ngOnInit() {}
}
