import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  myUrl:string;
  isAuth:boolean=false;
  constructor(private router: Router,private authService:AuthService) {
    this.myUrl=router.url;
    this.authService.authenticate();
   }

  ngOnInit(): void {
    this.authService.isauth
      .subscribe(data => this.isAuth = data);
  }

}
