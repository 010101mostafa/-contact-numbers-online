import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "../../../types"
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: '[app-one]',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() contact: Contact = {} as Contact;
  @Output() deleted: EventEmitter<number> = new EventEmitter<number>();;

  constructor(private router: Router, private contactService: ContactService) {
  }
  Delete() {
    this.contactService.delete(this.contact._id)
      .subscribe(
        data => {
          console.log("deleted  "+this.contact._id+"   "+this.contact.Name);
          this.deleted.emit();
        },
        err => {
          console.log(err);
        });
  }
  Edit() {
    this.router.navigate(["/contact/edit"], { queryParams: this.contact });
  }
  open(content){
    
  }
  ngOnInit(): void {

  }

}
