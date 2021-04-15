import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liston',
  templateUrl: './liston.component.html',
  styleUrls: ['./liston.component.scss'],
})
export class ListonComponent implements OnInit {
  @Input()mensaje:string;
  @Input()clase:string;
  @Input()ancho:string;
  constructor() { }

  ngOnInit() {}

}
