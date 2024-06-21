import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { AuthorService } from 'src/app/core/services/author.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-authors',
  templateUrl: './get-authors.component.html',
  styleUrls: ['./get-authors.component.scss'],
})
export class GetAuthorsComponent implements OnInit {
  constructor(private authorService: AuthorService) {}
  authorData: any;
  rowData: any = [];
  columnDefs: ColDef[] = [
    { headerName: 'AuthorName', field: 'name', flex: 3 },
    { headerName: 'Nationality', field: 'nationality', flex: 3 },
    { headerName: 'Biography', field: 'biography', flex: 3 },
    { headerName: 'Action', cellRenderer: CustomRendererComponent },
  ];
  ngOnInit(): void {
    this.getAuthor()
  }

  getAuthor() {
    this.authorService.getAuthor().subscribe({
      next: (response) => {
        this.authorData = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
