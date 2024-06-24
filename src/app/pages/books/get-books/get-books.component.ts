import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { BookService } from 'src/app/core/services/book.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  searchForm:any;
  params: any;
  constructor(private bookservice:BookService,private route:Router,private fb:FormBuilder){}
  bookData:any=[];
  rowData:any=[];
  columnDefs: ColDef[] = [
    { headerName: 'Title', field: 'title', flex: 3 },
    { headerName: 'Description', field: 'description', flex: 3 },
    { headerName: 'Price', field: 'price', flex: 3 },
    { headerName: 'AuthorName', field: 'authorDetails.name', flex: 3 },
    { headerName: 'CategoryName', field: 'categoryDetails.name', flex: 3 },
    { headerName:'Action', cellRenderer:CustomRendererComponent,cellRendererParams:{
      deleteFun:(id:string)=>this.deleteBookFn(id),
      update:(id:string)=>this.updateBookFn(id)
    }}
  ];
  ngOnInit(): void {
    this.getBook()
  }
  deleteBookFn(id: string) {
    this.bookservice.deleteBook(id).subscribe({
      next:(response)=>{
        alert(response);
        this.getBook()
      },
      error:(err)=>{
        alert(err.errors)
      }
    })
  }
  updateBookFn(id: string) {
    this.route.navigate([`books/editbooks/${id}`])
  }
  @Output() onSerachInput=new EventEmitter<string>()
  filtersearch(search:any) {
    this.params = {
      ...this.params,
      search: search.value
  }
    this.bookservice.getBooksByFilteration(this.params).subscribe({
      next:(response:any)=>{
        this.bookData=response.content
        // console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  filterlimit(_t10:any) {
    let limitvalue=_t10
    if(_t10.value==='all'){
      limitvalue=-1
    }
    this.params = {
      ...this.params,
      limit:_t10.value
  }
  this.bookservice.getBooksByFilteration(this.params).subscribe({
    next:(response:any)=>{
      this.bookData=response.content
      // console.log(response);
    },
    error:(err)=>{
      console.log(err);   
    }
    })
  }
  filterpage(_t24: HTMLInputElement) {
    // let pagevalue=_t10
    // if(_t24.value==='all'){
    //   limitvalue=-1
    // }
    this.params = {
      ...this.params,
      page:_t24.value
  }
  this.bookservice.getBooksByFilteration(this.params).subscribe({
    next:(response:any)=>{
      this.bookData=response.content
      // console.log(response);
    },
    error:(err)=>{
      console.log(err);   
    }
    })
  }
  getBook(){
    this.bookservice.getBook().subscribe({
      next:(response:any)=>{
        this.bookData=response.content
        // console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}

