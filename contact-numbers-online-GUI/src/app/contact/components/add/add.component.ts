import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../../../types';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  @Input() contact: Contact = {} as Contact;
  isNew = true;
  error: { msg: string, has: boolean } = { msg: "", has: false };
  constructor(private activateRouter: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(this.contact.Name, [Validators.required]),
      phone: new FormControl(this.contact.Phone, [Validators.required, Validators.pattern(/^\d{11}$/)]),
      address: new FormControl(this.contact.Address, []),
      notes: new FormControl(this.contact.Notes, []),
    });
  }
  ngOnInit(): void {
    this.activateRouter.queryParams
      .subscribe(param => {
        if (param["_id"]) {
          this.contact = {
            _id: param["_id"],
            Name: param["Name"],
            Phone: param["Phone"],
            Address: param["Address"],
            Notes: param["Notes"]
          } as Contact
          this.isNew = false
        }
      });
  }
  get name() { return this.form.controls['name']; }
  get phone() { return this.form.controls['phone']; }
  get address() { return this.form.controls['address']; }
  get notes() { return this.form.controls['notes']; }
  onSubmit() {
    if (this.isNew) {
      this.contactService.add(this.contact)
        .subscribe(
          (data) => {
            this.error.has = false
            this.form.reset()
          },
          err => {
            this.error.msg = err.error;
            this.error.has = true
          }
        );

    } else {
      this.contactService.update(this.contact)
        .subscribe(
          (data) => {
            this.error.has = false
            this.router.navigateByUrl("/contact");
          },
          err => {
            this.error.msg = err.error;
            this.error.has = true
          }
        );
    }
  }
}
