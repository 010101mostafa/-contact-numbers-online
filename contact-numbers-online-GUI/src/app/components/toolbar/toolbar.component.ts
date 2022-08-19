import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  myUrl:string;
  constructor(private router: Router) {
    this.myUrl=router.url;
   }

  ngOnInit(): void {
  }

}
