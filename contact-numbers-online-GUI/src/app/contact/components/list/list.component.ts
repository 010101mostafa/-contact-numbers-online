import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: ActivatedRoute, private contactService: ContactService) { }
  contacts: Contact[] = [];
  page: string = "0";
  ngOnInit(): void {
    this.router.params
      .subscribe(parm => {
        this.page = parm["page"];
        if(this.page==undefined)
          this.page="0";
        this.contactService.get(this.page, 5)
          .subscribe(
            data => { this.contacts = data; },
            err => {console.log("error in data reteval :"); console.log(err); }
          );
      });
  }

}
