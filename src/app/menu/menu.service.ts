import { Injectable } from '@angular/core';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: Menu[] = [
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

  getMenu(){
    return [...this.menu];
  }
  getMenuDetail(menuId: string){
    return {
      ...this.menu.find(menu => menu.id === menuId)
  };

  }
}
