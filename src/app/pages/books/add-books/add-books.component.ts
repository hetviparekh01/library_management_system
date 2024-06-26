import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthor } from 'src/app/core/interfaces';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss'],
})
export class AddBooksComponent implements OnInit {
  authorName: any;
  bookForm: FormGroup;
  authorData: any;
  categoryData: any;
  authorId: any;
  isUpdate: boolean = false;
  data: any;
  bookId: string = this.activeRoute.snapshot.paramMap.get('id') as string;
  role = this.tokenService.getRole() as string;
  isSubmit: boolean = true;
  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private tokenService: TokenService,
    private categoryService: CategoryService,
    private bookService: BookService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {
    this.bookForm = fb.group({
      title: ['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      ISBN: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    if (this.tokenService.getRole() === 'admin') {
      this.getAuthors();
    } else {
      this.getAuthorById();
    }
    if (this.activeRoute.snapshot.paramMap.get('id')) {
      this.isUpdate = true;
      this.isSubmit = false;
      this.getDataById();
    }
    this.getCategories();
  }

  updateData() {
    this.bookService.updateBook(this.bookForm.value, this.bookId).subscribe({
      next: (response) => {
        alert(response);
        this.route.navigate(['books/getallBooks']);
      },
      error: (err) => {
        alert(err.error.content);
      },
    });
  }
  onUpdateSubmit() {
    if (this.bookForm.valid) {
      this.updateData();
    } else {
      alert('error in filling the form');
    }
  }
  getDataById() {
    this.bookService.getBookById(this.bookId).subscribe({
      next: (response: any) => {
        if (this.isUpdate) {
          this.bookForm.patchValue({
            title: response.content[0].title,
            ISBN: response.content[0].ISBN,
            description: response.content[0].description,
            price: response.content[0].price,
          });
        }
      },
      error: (err) => {
        // alert(err.errors);
      },
    });
  }

  getAuthorById() {
    this.authorService
      .getAuthorByName(this.tokenService.getName() as string)
      .subscribe({
        next: (response: any) => {
          this.authorId = response.content._id;
          this.authorName = response.content.name;
        },
        error: (err) => {
          // alert(err.errors);
        },
      });
  }

  getAuthors() {
    this.authorService.getAuthor().subscribe({
      next: (response) => {
        this.authorData = response;
      },
      error: (err) => {
        // alert(err.errors);
      },
    });
  }

  getCategories() {
    this.categoryService.getCategory().subscribe({
      next: (response: any) => {
        this.categoryData = response.content;
      },
      error: (err) => {
        // alert(err.error.content);
      },
    });
  }

  addBook() {
    const bookdata = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      category: this.bookForm.value.category,
      ISBN: this.bookForm.value.ISBN,
      description: this.bookForm.value.description,
      price: this.bookForm.value.price,
    };
    this.bookService.addBook(this.bookForm.value).subscribe({
      next: (response) => {
        alert(response);
        this.route.navigate(['books/getallBooks']);
      },
      error: (err) => {
        alert(err.error.content);
      },
    });
  }
  onSubmit() {
    if (this.bookForm.valid) {
      if (!this.isUpdate) {
        this.addBook();
      }
      this.bookForm.reset();
    } else {
      alert(this.bookForm.errors);
    }
  }
}
