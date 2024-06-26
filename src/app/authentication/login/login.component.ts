import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponseType, IUser } from 'src/app/core/interfaces';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private router: Router,
    private tokenservice: TokenService
  ) {
    this.loginform = fb.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  loginUser() {
    this.userservice
      .loginUser({
        name: this.loginform.value.name,
        password: this.loginform.value.password,
      })
      .subscribe({
        next: (response: any) => {
          this.tokenservice.setToken(response.content.Accesstoken);
          this.tokenservice.setRole(response.content.role);
          this.tokenservice.setName(response.content.name);
          alert(response.content.message);
          this.router.navigate(['']);
        },
        error: (err) => {
          alert(err);
        },
      });
  }

  onSubmit() {
    if (this.loginform.valid) {
      this.loginUser();
    } else {
      alert(this.loginform.errors);
    }
  }
}
