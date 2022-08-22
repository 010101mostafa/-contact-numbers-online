import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "../../../types"
import { Router } from '@angular/router';
//import { DeleteComponent } from '../delete/delete.component';
//import { MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: '[app-one]',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() contact: Contact = {} as Contact;
  @Output() deleted: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(private router: Router) {
  }
  Edit() {
    this.router.navigate(["/contact/edit"], { state: this.contact });
  }
  open(){
    
    this.deleted.emit(this.contact);
  }
  ngOnInit(): void {

  }

}
