import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 results: any;
  //menu: Menu[];
  constructor(/*private menuService: MenuService*/) { }

  ngOnInit() {
    fetch('./assets/input.json').then(res => res.json()).then(json => {
      console.log('results::', json);
      this.results = json;
    });
    //this.menu = this.menuService.getMenu();
  }

}
