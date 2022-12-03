import { Injectable } from '@angular/core';
import { MenuData } from 'src/app/shared/domain/menu-data';
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
}
