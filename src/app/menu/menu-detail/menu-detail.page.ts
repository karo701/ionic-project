import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import {Menu} from '../menu.model';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {

  loadedMenuDetail: Menu;
  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('menuId')){
      return;
      }
      const menuId = paramMap.get('menuId');
      this.loadedMenuDetail = this.menuService.getMenuDetail(menuId);
    });
  }

}
