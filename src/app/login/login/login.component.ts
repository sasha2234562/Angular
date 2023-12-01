import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": environment.apiKey
    }
  }

  ngOnInit() {
    this.http.get('https://social-network.samuraijs.com/api/1.1/auth/me').subscribe((res) => {
      console.log(res)
    })
  }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  })

  get email() {
    return this.login.get('email')
  }

  onSumbut() {

    // this.http.post(`https://social-network.samuraijs.com/api/1.1/auth/login`, this.login.value, this.httpOptions).subscribe(res=> {
    //   console.log(this.login.value)
    // })
  }
}
