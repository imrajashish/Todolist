import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  submit(event:any){
    console.log(event.target.value)
    this.isValid = true
  }
  getInputInfo(my:any){
    console.log(my.target.value)

  }
  isValid:boolean= false;
  

}
