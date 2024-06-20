import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupform:FormGroup
  constructor(private fb:FormBuilder){
    this.signupform=fb.group({
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])]
    })
  }
  onSubmit() {
    if(this.signupform.valid){
      console.log(this.signupform.value);
    }else{
      console.log(this.signupform.errors);
    }
  }
}
