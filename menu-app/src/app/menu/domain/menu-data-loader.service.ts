import { MenuData } from 'src/app/shared/domain/menu-data';

export abstract class MenuDataLoaderService {
  abstract loadMenu(): MenuData[];
  abstract getFoods(menuList:MenuData[]): MenuData[];
  abstract getSweets(menuList:MenuData[]): MenuData[];
  abstract getDrinks(menuList:MenuData[]): MenuData[];
}