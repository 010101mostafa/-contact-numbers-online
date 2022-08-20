import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit ,OnDestroy {
  constructor(private router: ActivatedRoute, private contactService: ContactService) { }
  contacts: Contact[] = [];
  page: number = 0;
  Npages: number = 0;
  array: number[] = [];
  search: Contact = {} as Contact
  socket = io("ws://localhost:3000");
  ngOnInit(): void {
    this.contactService.count(this.search)
      .subscribe(arg => {
        this.Npages = Math.floor(Number(arg.count) / 5);
        this.array = new Array(this.Npages).fill(0).map((n, index) => index);
      });
    this.router.params
      .subscribe(parm => {
        this.page = Number(parm["page"]);
        if (isNaN(this.page))
          this.page = 0;
        this.contactService.get((this.page * 5), 5)
          .subscribe(
            data => { this.contacts = data; },
            err => { console.log("error in server :"); console.log(err); }
          );
      });
      this.socket.on("oneEdit",(editid:any,isEditing:boolean)=>{
        for(let e of this.contacts){
          if(e._id==editid)
            e.isEditing=isEditing;
        }
      });
  }
  
  ngOnDestroy(): void {
    
  }

  searchGo(){
    this.contacts=[];
    
    this.contactService.get((this.page * 5), 5, this.search)
      .subscribe(
        data => { this.contacts = data;  console.log(data)},
        err => { console.log("error in server :"); console.log(err); }
      );
  }

}
