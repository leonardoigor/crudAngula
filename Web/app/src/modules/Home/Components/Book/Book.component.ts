import { Component, Input, OnInit } from '@angular/core';
import { BookEntity } from 'src/domain/entities/BookEntity';

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() public book: BookEntity | undefined;
  constructor() {
    console.log(this.book, 'book');
  }

  ngOnInit() {}
}
