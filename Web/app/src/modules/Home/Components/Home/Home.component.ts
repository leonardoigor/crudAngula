import { Component, OnInit } from '@angular/core';
import { BookEntity } from 'src/domain/entities/BookEntity';
import { Global } from 'src/domain/entities/Global';
import { ObservableService } from 'src/infra/services/Observable/Observable.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  public books: BookEntity[] = [];

  constructor(private observableGlobalService: ObservableService<Global>) {
    this.books = Array(2)
      .fill(NaN)
      .map(() => BookEntity.createBook());

    this.setGlobalTitle('Inicio', '/home');
  }
  setGlobalTitle(title: string, url: string) {
    let global = Global.GetInstance();
    global.title = title;
    global.url = url;
    this.observableGlobalService.setObservable(global);
  }

  ngOnInit() {}
}
