import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform:FormGroup
  constructor(private fb:FormBuilder){
    this.loginform=fb.group({
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])]
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
