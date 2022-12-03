import { MenuData } from 'src/app/shared/domain/menu-data';

export abstract class MenuDataLoaderService {
  abstract loadMenu(): MenuData[];
}