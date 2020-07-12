import {Component, OnInit} from '@angular/core';
import {Book} from '../../interface/book';
import {Subscription} from 'rxjs';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  message: string;
  book: Book;
  subcription: Subscription;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subcription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.bookDetail(+id).subscribe(next => {
        this.book = next;
      }, error => {
        console.log(error);
      });
    });
  }

  edit(bookForm) {
    console.log(this.book.id);
    this.bookService.editBook(this.book.id, bookForm.value).subscribe(next => {
      this.message = 'Đã sửa thành công';
    }, error => {
      this.message = 'Sửa không được thì bỏ';
    });
  }
}
