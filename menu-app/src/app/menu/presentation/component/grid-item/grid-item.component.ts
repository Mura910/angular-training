import { Component, Input } from '@angular/core';
import { MenuData } from 'src/app/shared/domain/menu-data';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  @Input() menuList: MenuData[];
  constructor() {
    this.menuList = []
  }
}
