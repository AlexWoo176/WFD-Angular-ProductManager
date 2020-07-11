import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.bookDetail(+id).subscribe(
      next => this.book = next,
      error => console.log(error)
    );
  }
}
