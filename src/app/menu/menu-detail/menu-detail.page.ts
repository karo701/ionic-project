import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';
import {Menu} from '../menu.model';


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {

  results: any;
  loadedMenuDetail: Menu;
  tutorialShown = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('menuId')){
        this.router.navigate(['/menu']);
      return;
      }
      const menuId = paramMap.get('menuId');
      fetch('./assets/input.json').then(res => res.json()).then(json => {
        console.log('results::', json);
        this.results = json;
        this.loadedMenuDetail = this.results.find((item) => (item.id === menuId));
      });
    });

  }

}
