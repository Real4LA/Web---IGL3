export class Book {
  id: number;
  title: string;
  author: string;
  publisherEmail: string;
  publisherPhone: string;
  releaseDate: string;
  category: string;
  isAvailable: boolean;
  stock?: number;

  constructor(params: {
    id: number;
    title: string;
    author: string;
    publisherEmail: string;
    publisherPhone: string;
    releaseDate: string;
    category: string;
    isAvailable: boolean;
    stock?: number;
  }) {
    this.id = params.id;
    this.title = params.title;
    this.author = params.author;
    this.publisherEmail = params.publisherEmail;
    this.publisherPhone = params.publisherPhone;
    this.releaseDate = params.releaseDate;
    this.category = params.category;
    this.isAvailable = params.isAvailable;
    this.stock = params.stock;
  }
}
