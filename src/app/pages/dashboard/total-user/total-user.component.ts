import { Component } from '@angular/core';
import { AuthorService } from 'src/app/core/services/author.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-total-user',
  templateUrl: './total-user.component.html',
  styleUrls: ['./total-user.component.scss']
})
export class TotalUserComponent {
  data: any;
  options: any;
  authorData:any;
  userData: any;

  constructor(private authorService:AuthorService,private userService:UserService){}
  ngOnInit() {
    this.authorService.getAuthor().subscribe({
      next: (response:any) => {
        this.authorData = response.content.length;
        console.log(response.content.length);
      },
      error: (err) => {
        // alert(err.errors)
        console.log(err);

      },
    });
    this.userService.getUser().subscribe({
      next:(response:any)=>{
        this.userData=response.content
        console.log(response.content.length);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    this.data = {
      labels: ['Authors', 'User'],
      datasets: [
        {
          data: [13,17],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
           
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ]
        }
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
    this.getChart()
  }
  getAuthor(){
 
  }
    getUser(){
    
    }

  

  getChart(){

  }
}
