import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-token-dash',
  templateUrl: './cash-token-dash.component.html',
  styleUrls: ['./cash-token-dash.component.css']
})
export class CashTokenDashComponent implements OnInit {
    width = screen.width
      
     lg = true ? this.width >= 601 : false;
     
     
  constructor() {  }

  ngOnInit(): void {
  }

}
