import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  /*form: FormGroup;
  error: { msg: string, has: boolean } = { msg: "", has: false };
  constructor(private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    });
  }
  onSubmit(username: string, password: string) {

  }
*/
ngOnInit(): void {
}
}
