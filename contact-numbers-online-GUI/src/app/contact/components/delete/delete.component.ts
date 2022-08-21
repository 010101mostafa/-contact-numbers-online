import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { Contact } from '../../../types';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() deleName="";
  @Input() deleId="";
  @Output() deleted:EventEmitter<void> = new EventEmitter<void>();
  constructor(private contactService: ContactService) {
   }

  ngOnInit(): void {
  }
  Delete() {
    this.contactService.delete(this.deleId)
      .subscribe(
        data => {
          console.log("deleted  "+this.deleId+"   "+this.deleName);
          this.deleted.emit();
        },
        err => {
          console.log(err);
        });
  }

}
