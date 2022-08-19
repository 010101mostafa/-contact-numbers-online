import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  contacts:Contact[]=[];
  ngOnInit(): void {
  }

}
