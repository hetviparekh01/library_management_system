import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResponseType } from 'src/app/core/interfaces';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  username: any;
  constructor(private userService:UserService,private tokenService:TokenService,private router:Router){}
  ngOnInit(): void {
    this.getUserId()
  }
  getUserId(){
    this.userService.getUserById().subscribe({
      next:(response:any)=>{
        // console.log(response);
        this.username=response.content.name
      }
    })
  }
  logout() {  
    this.tokenService.clearLocalStorage()
    this.router.navigate(['/auth/login'])
  }
}
