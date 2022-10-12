import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss'],
})
export class Cmp2Component implements OnInit {

@Input() lista: boolean;

  constructor() { }

  ngOnInit() {}

}
