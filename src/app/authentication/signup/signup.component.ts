import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupform:FormGroup
  constructor(private fb:FormBuilder,private userservice:UserService,private router:Router){
    this.signupform=fb.group({
      name:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])],
      role:['user',Validators.compose([Validators.required])],
    })
  }

  addUser(){
    this.userservice.addUser({
      name:this.signupform.value.name,
      password:this.signupform.value.password,
      role:this.signupform.value.role
    }).subscribe({
      next:(response:any)=>{
          alert(response);
          this.router.navigate(['/auth/login'])
      },
      error:(err)=>{
        alert(err)
      }
    })
  }
  onSubmit() {
    if(this.signupform.valid){
      this.addUser()
      console.log(this.signupform.value);
      this.signupform.reset()
    }else{
      console.log(this.signupform.errors);
    }
  }
}
