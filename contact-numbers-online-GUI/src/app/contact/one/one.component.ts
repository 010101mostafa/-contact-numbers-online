import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Contact } from "../../types"

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() contact:Contact;
  @Output() deleted:EventEmitter<number>;
  @Output() edit:EventEmitter<void>

  constructor() { 
    this.contact={
      Name:"MOSTAFA safwat",
      Address:"el saf",
      Phone:"01224135425",
      Notes:"kjladskjfljadf adksfajdlfj lasdkfjaldkfj dslfmdaslf"
    }as Contact;
  }

  ngOnInit(): void {
  }

}
