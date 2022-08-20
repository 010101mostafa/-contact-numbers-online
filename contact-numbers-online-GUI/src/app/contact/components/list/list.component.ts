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
  page: number = 0;
  Npages:number=0;
  search:object={}
  ngOnInit(): void {
    this.contactService.count(this.search)
      .subscribe(arg => this.Npages = Number(arg));
    this.router.params
      .subscribe(parm => {
        this.page = Number(parm["page"]);
        if(isNaN(this.page))
          this.page=0;
        this.contactService.get((this.page*5), 5)
          .subscribe(
            data => { this.contacts = data; },
            err => {console.log("error in server :"); console.log(err); }
          );
      });
  }

}
