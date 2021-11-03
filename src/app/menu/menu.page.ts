import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu: Menu[] = [
    {
      id: 'm1',
      title: 'Obiad',
      imageUrl:'https://pliki.doradcasmaku.pl/klasyczny-obiadek-kotlet-z-ziemniakami-i-mizeria0-4.webp',
      description: ['Schabowy', 'Ziemniaki', 'Ogórki']
    },
    {
      id: 'm2',
      title: 'Napoje',
      imageUrl:'https://image.ceneostatic.pl/data/products/17174166/i-coca-cola-zero-500ml.jpg',
      description: ['Coca-cola', 'Zero']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
