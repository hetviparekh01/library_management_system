import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/core/services/user.service';
import { CustomRendererComponent } from 'src/app/shared/cellrenderer/custom-renderer/custom-renderer.component';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  constructor(private userService:UserService){}
  userData:any;
  rowData:any=[];
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', flex: 3 },
    { headerName: 'role', field: 'role', flex: 3 },
    { headerName: 'Action', cellRenderer: CustomRendererComponent ,cellRendererParams:{
      deleteFun:(id:string)=>this.deleteUserFn(id),
      update:(data:any)=>this.updateUserfn(data)
    }},
  ];
  ngOnInit(): void {
   this.getUsers()
  }
  deleteUserFn(id:string){
    console.log(id);
  }
  updateUserfn(data:any){
    console.log(data);
  }
  getUsers(){
    this.userService.getUser().subscribe({
      next:(response:any)=>{
        this.userData=response.content
      },
      error:(err)=>{
        // console.log(err);
      }
    })
  }
}
