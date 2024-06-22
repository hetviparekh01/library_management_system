import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private bookservice:BookService,private route:Router){}
  bookData:any=[];
  rowData:any=[];
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 3 },
    { headerName: 'Description', field: 'description', flex: 3 },
    { headerName: 'Price', field: 'price', flex: 3 },
    { headerName: 'AuthorDetails', field: 'AuthorDetails', flex: 3 },
    { headerName: 'CategoryDetails', field: 'AuthorDetails', flex: 3 },
    { headerName:'Action', cellRenderer:CustomRendererComponent,cellRendererParams:{
      deleteUser:(id:string)=>this.deleteBookFn(id),
      updateUser:(id:string)=>this.updateBookFn(id)
    }}
  ];
  ngOnInit(): void {
    this.getBook()
  }
  deleteBookFn(id: string) {
    console.log(id);
  }
  updateBookFn(id: string) {
    this.route.navigate([`books/editbooks/${id}`])
  }
  getBook(){
    this.bookservice.getBook().subscribe({
      next:(response)=>{
          this.bookData=response
          // console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}

