import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IResponseType, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform:FormGroup
  constructor(private fb:FormBuilder,private userservice:UserService){
    this.loginform=fb.group({
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])]
    })
  }

  loginUser(){
    this.userservice.loginUser({
      name:this.loginform.value.name,
      password:this.loginform.value.password,
      role:this.loginform.value.role
    }).subscribe({
      next:(response:any)=>{
          alert(response.content)
      },
      error:(err)=>{
        alert(err.error.)
      }
    })
  }

  onSubmit() {
    if(this.loginform.valid){
      console.log(this.loginform.value);
    }else{
      console.log(this.loginform.errors);
    }
  }
  
}
