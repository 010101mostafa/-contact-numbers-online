import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private router: ActivatedRoute, private contactService: ContactService, private _router: Router) { }
  contacts: Contact[] = [];
  page: number = 0;
  Npages: number = 0;
  array: number[] = [];
  search: Contact = {} as Contact
  socket = io("ws://localhost:3000");
  ngOnInit(): void {
    this.router.queryParams
      .subscribe(param => {
        this.search = {
          Name: param["Name"],
          Phone: param["Phone"],
          Address: param["Address"],
          Notes: param["Notes"]
        } as Contact
      });
    this.router.params
      .subscribe(parm => {
        this.page = Number(parm["page"]);
        if (isNaN(this.page))
          this.page = 1;
        this.getData();
      });
    this.socket.on("oneEdit", (editid: any, isEditing: boolean) => {
      for (let e of this.contacts) {
        if (e._id == editid)
          e.isEditing = isEditing;
      }
    });
  }
  getData() {
    this.contactService.get(((this.page - 1) * 5), 5, this.search)
      .subscribe(
        data => { this.contacts = data; },
        err => { console.log("error in server :"); console.log(err); }
      );
    this.contactService.count(this.search)
      .subscribe(arg => {
        this.Npages = Math.floor(Number(arg.count - 1) / 5) + 1;
        this.array = new Array(this.Npages).fill(0).map((n, index) => index + 1);
      });
  }

  ngOnDestroy(): void {

  }

  searchGo() {
    this._router.navigate(["/contact/"], { queryParams: this.search });
  }

}
