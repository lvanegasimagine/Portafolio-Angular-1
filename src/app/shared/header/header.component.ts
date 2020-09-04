import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

  mensaje(mensaje: string) {
    console.log(mensaje);
  }

}
