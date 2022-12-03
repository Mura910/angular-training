import { MenuData } from './menu-data';

export abstract class MenuDataLoader {
  abstract loadMenu(): MenuData[];
}
