import { Component, OnInit } from '@angular/core';
import { Global } from 'src/domain/entities/Global';
import { RoutesEntity } from 'src/domain/entities/RoutesEntity';
import { ObservableService } from 'src/infra/services/Observable/Observable.service';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  Routes: RoutesEntity[] = [RoutesEntity.instance('Inicio', 'home')];
  globa?: Global;
  btnClicked: boolean = true;

  constructor(private observableGlobalService: ObservableService<Global>) {
    this.globa = Global.GetInstance();

    this.setObservable();
    document.body.onclick = (e) => {
      let icon = document.getElementById('menuIcon');
      let equal = e.target === icon;
      if (!equal) {
        this.menuButtonCkick();
      }
      //
    };
  }

  setObservable() {
    this.observableGlobalService
      .getObservable()
      .subscribe((global) => (this.globa = global));
  }

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

  ngOnInit() {
    // const global = Global.GetInstance();
    // global.title = 'Inicio';
    // global.url = 'home';
    // this.observableGlobalService.setObservable(global);
  }
}
