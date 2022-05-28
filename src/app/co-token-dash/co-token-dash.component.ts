import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-token-dash',
  templateUrl: './co-token-dash.component.html',
  styleUrls: ['./co-token-dash.component.css']
})
export class CoTokenDashComponent implements OnInit {
  width = screen.width
      
  lg = true ? this.width >= 601 : false;
  constructor() { }

  ngOnInit(): void {
  }

}
