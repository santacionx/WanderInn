import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "wander.inn@gmail.com";
  userName = "Wander Inn";
  
  constructor() { }

  ngOnInit(): void {
  }

}
