import { Injectable } from '@angular/core';
import { Category, MenuData } from 'src/app/shared/domain/menu-data';
import { MenuDataLoader } from 'src/app/shared/domain/menu-data-loader';
import { MenuDataLoaderService } from '../domain/menu-data-loader.service';

@Injectable({
  providedIn: 'root'
})
export class MenuDataLoaderServiceImpl implements MenuDataLoaderService {

  constructor(private menuDataLoader: MenuDataLoader) { }
  loadMenu(): MenuData[] {
    return this.menuDataLoader.loadMenu();
  }
  //TODO動いていない。要修正
  getFoods(menuList: MenuData[]): MenuData[] {
    let foodList = menuList.filter(data =>  data.category === Category.food);
    console.log(foodList.length)
    return foodList;
  }
  getSweets(menuList: MenuData[]): MenuData[] {
    let sweetList = menuList.filter(data => data.category == Category.sweet);
    return sweetList;
  }
  getDrinks(menuList: MenuData[]): MenuData[] {
    let drinkList = menuList.filter(data => data.category == Category.drink);
    return drinkList;
  }
}
