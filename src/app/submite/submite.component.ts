import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-submite',
  templateUrl: './submite.component.html',
  styleUrls: ['./submite.component.css']
})
export class SubmiteComponent implements OnInit {
  @Input() place:string="Submit SignIn";
  @Input() singout:string="Submit SignUp";
  @Output() show = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {

  }
  
  
}
