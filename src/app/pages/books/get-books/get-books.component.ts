import { Component } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent {
  constructor(private bookservice:BookService){}

  getBook(){
    this.bookservice.getBook().subscribe({
      next:(response)=>{
          console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
