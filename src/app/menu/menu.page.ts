import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 menu: Menu[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

}
