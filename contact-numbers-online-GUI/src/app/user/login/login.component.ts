import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UerService} from '../service/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private uerService:UerService) { }
  
  ngOnInit(): void {
    this.form=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    });
  }
  onSubmit(username:string,password:string){
    this.uerService.login(username,password).sub
  }

}
