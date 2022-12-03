import { Injectable } from '@angular/core';
import { MenuData } from '../domain/menu-data';
import { MenuDataLoader } from '../domain/menu-data-loader';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements MenuDataLoader{

  constructor() { }
  loadMenu(): MenuData[] {
    //todo:本実装
    throw new Error('Method not implemented.');
  }
}
