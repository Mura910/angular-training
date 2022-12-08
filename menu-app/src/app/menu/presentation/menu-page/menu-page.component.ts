import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/shared/domain/menu-data';
import { MenuDataLoaderService } from '../../domain/menu-data-loader.service';

const Display = {
  list: 0,
  grid: 1,
  group: 2,
} as const;

type Display = typeof Display[keyof typeof Display];

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  //　メニュー一覧
  menuList: MenuData[];

  //　表示形式
  display: Display;

  constructor(private menuService: MenuDataLoaderService) {
    this.menuList = [];
    this.display = Display.list
  }

  ngOnInit() {
    this.menuList = this.menuService.loadMenu();
  }

  onListClick() {
    this.display = Display.list;
  }

  onGridClick() {
    this.display = Display.grid;
  }

  onGroupClick() {
    this.display = Display.group;
  }
}
