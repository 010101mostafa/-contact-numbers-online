import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../../types';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form:FormGroup={}as FormGroup;
  @Input() contact:Contact={}as Contact;
  submit="add";
  error: { msg: string, has: boolean } = { msg: "", has: false };
  constructor(private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.form = new FormGroup( {
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^\d{11}$/)]),
      address: new FormControl("", []),
      notes: new FormControl("", []),
    });
  }
  get name() { return this.form.get('name'); }
  get phone() { return this.form.get('phone'); }
  get address() { return this.form.get('address'); }
  get notes() { return this.form.get('notes'); }
  onSubmit() {
    console.log(this.contact);
  }
}
