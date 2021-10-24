import { Component, OnInit } from '@angular/core';
import { RoutesEntity } from 'src/domain/entities/RoutesEntity';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  Routes: RoutesEntity[] = [RoutesEntity.instance('Inicio', 'home')];

  btnClicked: boolean = true;

  menuButtonCkick(active: boolean = false) {
    let btn = document.getElementById('mobile-nav');

    if (btn) {
      if (this.btnClicked && active) {
        btn!.style.transform = 'translateX(0%)';
        this.btnClicked = true;
      } else {
        btn!.style.transform = 'translateX(-105%)';
        this.btnClicked = false;
      }
      this.btnClicked = true;
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
