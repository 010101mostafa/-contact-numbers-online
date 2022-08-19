import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UerService } from '../service/user.service'
import { verifiedUser } from "../../types"
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: { msg: string, has: boolean } = { msg: "", has: false };
  constructor(private fb: FormBuilder, private uerService: UerService, private router: Router,private authService:AuthService) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }
  onSubmit(username: string, password: string) {
    this.uerService.login(username, password).subscribe(
      async data => {
        localStorage.setItem("token", data.token);
        this.authService.setAuthState(true);
        //this.router.navigateByUrl("/contact");
      },
      err => {
        this.error.msg = err.toString();
        console.log(err);
        this.error.has = true;
      }
    );
  }

}
