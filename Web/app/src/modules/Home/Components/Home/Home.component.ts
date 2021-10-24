import { Component, OnInit } from '@angular/core';
import { BookEntity } from 'src/domain/entities/BookEntity';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  public books: BookEntity[] = [];

  constructor() {
    this.books = Array(2)
      .fill(NaN)
      .map(() => BookEntity.createBook());
    console.log(this.books);
  }

  ngOnInit() {}
}
