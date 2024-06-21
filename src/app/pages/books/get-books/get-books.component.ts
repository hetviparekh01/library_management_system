import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { IBook } from 'src/app/core/interfaces';
import { BookService } from 'src/app/core/services/book.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  constructor(private bookservice:BookService){}
  bookData:any=[];
  rowData:any=[];
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 3 },
    { headerName: 'Description', field: 'description', flex: 3 },
    { headerName: 'Price', field: 'price', flex: 3 },
    { headerName: 'AuthorDetails', field: 'AuthorDetails', flex: 3 },
    { headerName: 'CategoryDetails', field: 'AuthorDetails', flex: 3 },
    { headerName:'Action', cellRenderer:CustomRendererComponent}
  ];
  ngOnInit(): void {
    this.getBook()
  }
  
  getBook(){
    this.bookservice.getBook().subscribe({
      next:(response)=>{
          this.bookData=response
          console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
