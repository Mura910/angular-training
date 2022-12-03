import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/shared/domain/menu-data';
import { MenuDataLoaderService } from '../../domain/menu-data-loader.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  //　メニュー一覧
  menuList: MenuData[];

  //　リスト表示か
  isListView: boolean;

  constructor(private menuService: MenuDataLoaderService) {
    this.menuList=[];
    this.isListView = true;
  }

  ngOnInit() {
    this.menuList = this.menuService.loadMenu();
    // this.isListView = true;
  }

  onListClick() {
    this.isListView = true;
  }

  onGridClick() {
    this.isListView = false;
  }
}
