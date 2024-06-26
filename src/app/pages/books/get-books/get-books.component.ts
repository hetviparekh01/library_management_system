import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/core/services/book.service';
import { TokenService } from 'src/app/core/services/token.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss'],
})
export class GetBooksComponent implements OnInit {
  searchForm: any;
  params: any;
  bookData: any = [];
  rowData: any = [];
  subscription!: Subscription;
  constructor(
    private bookservice: BookService,
    private route: Router,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    if (this.tokenService.getRole() === 'author') {
      this.filterAuthor();
    } else {
      this.getBook();
    }
  }
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 3 },
    { headerName: 'Description', field: 'description', flex: 3 },
    { headerName: 'Price', field: 'price', flex: 3 },
    { headerName: 'AuthorName', field: 'authorDetails.name', flex: 3 },
    { headerName: 'CategoryName', field: 'categoryDetails.name', flex: 3 },
    {
      headerName: '',
      cellRenderer: CustomRendererComponent,
      cellRendererParams: {
        deleteFun: (id: string) => this.deleteBookFn(id),
        update: (id: string) => this.updateBookFn(id),
      },
    },
  ];
  deleteBookFn(id: string) {
    this.bookservice.deleteBook(id).subscribe({
      next: (response) => {
        alert(response);
        this.getBook();
      },
      error: (err) => {
        alert(err.error.content);
      },
    });
  }
  updateBookFn(id: string) {
    this.route.navigate([`books/editbooks/${id}`]);
  }

  filtersearch(search: any) {
    this.params = {
      ...this.params,
      search: search.value,
    };
    this.bookservice.getBooksByFilteration(this.params).subscribe({
      next: (response: any) => {
        this.bookData = response.content;
      },
      error: (err) => {
        // alert(err)
      },
    });
  }
  filterlimit(_t10: any) {
    let limitvalue = _t10;
    if (_t10.value === 'all') {
      limitvalue = -1;
    }
    this.params = {
      ...this.params,
      limit: _t10.value,
    };
    this.bookservice.getBooksByFilteration(this.params).subscribe({
      next: (response: any) => {
        this.bookData = response.content;
      },
      error: (err) => {
        // alert(err)
      },
    });
  }
  filterpage(_t24: HTMLInputElement) {
    this.params = {
      ...this.params,
      page: _t24.value,
    };
    this.bookservice.getBooksByFilteration(this.params).subscribe({
      next: (response: any) => {
        this.bookData = response.content;
      },
      error: (err) => {
        // alert(err)
      },
    });
  }
  filterAuthor() {
    this.params = {
      ...this.params,
      filter_author: this.tokenService.getName(),
    };
    this.bookservice.getBooksByFilteration(this.params).subscribe({
      next: (response: any) => {
        this.bookData = response.content;
      },
      error: (err) => {
        // alert(err)
      },
    });
  }
  getBook() {
    this.bookservice.getBook().subscribe({
      next: (response: any) => {
        this.bookData = response.content;
      },
      error: (err) => {
        console.log(err.error.content);
        alert(err.error.content)
      },
    });
  }
}
