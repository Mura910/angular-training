import { Component, Input, OnInit } from '@angular/core';
import { MenuDataLoaderService } from 'src/app/menu/domain/menu-data-loader.service';
import { MenuData } from 'src/app/shared/domain/menu-data';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() menuList: MenuData[];

  foodList: MenuData[]

  sweetList: MenuData[]

  drinkList: MenuData[]

  constructor(private menuDataLoader: MenuDataLoaderService) {
    this.menuList = [];
    this.foodList = this.menuDataLoader.getFoods(this.menuList);
    this.sweetList = this.menuDataLoader.getSweets(this.menuList);
    this.drinkList = this.menuDataLoader.getDrinks(this.menuList);
  }

  ngOnInit(): void {
  }
}
