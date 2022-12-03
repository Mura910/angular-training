import { Component, Input } from '@angular/core';
import { MenuData } from 'src/app/shared/domain/menu-data';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() menuList: MenuData[];

  constructor() {
    this.menuList = [];
  }
}
