export class BookEntity {
  public id: number;
  public title: string;
  public author: string;
  public description: string;
  public image: string;
  public price: number;
  public rating: number;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    image: string,
    price: number,
    rating: number
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.image = image;
    this.price = price;
    this.rating = rating;
  }

  static createBook(
    id: number = 0,
    title: string = 'title',
    author: string = 'author',
    description: string = 'description',
    image: string = 'image',
    price: number = 0,
    rating: number = 0
  ) {
    return new BookEntity(id, title, author, description, image, price, rating);
  }
}
