import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
})
export class Cmp1Component implements OnInit {


 @Input() tarjeta: boolean;




  constructor() { }

  ngOnInit() {}

}
