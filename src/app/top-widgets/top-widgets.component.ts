import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocation, faShop, faBox, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent implements OnInit {
faLocation = faLocation;
faShop = faShop;
faBox = faBox;
faMoneyBill = faMoneyBill;

constructor() { }

ngOnInit(): void {
  
}
}
