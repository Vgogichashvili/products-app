import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/auth-service/login.service';

// login component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isPasswordVisible = false;

  loginForm: FormGroup | any
  
  
    constructor(private serviceLogin: LoginService, private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        'userDetails' : new FormGroup({
            'username': new FormControl("kminchelle", [Validators.required]),
            'password': new FormControl("0lelplR", [Validators.required])
        })
      })
    }
  
  onSubmit(){
      this.serviceLogin.login(this.loginForm.value.userDetails.username, 
                                          this.loginForm.value.userDetails.password).subscribe((res) => {
        if(this.loginForm.valid){
            localStorage.setItem('token', JSON.stringify(res));
            this.router.navigate(['/list'])
        }else if (this.loginForm.invalid || '' || this.loginForm.dirty){
          this.router.navigate(['/register'])
        }
        else  {
          this.router.navigate(['/register'])
        }
      }
    )
  }
  showPassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }
 }
