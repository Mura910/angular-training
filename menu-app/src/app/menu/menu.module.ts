import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataLoaderService } from './domain/menu-data-loader.service';
import { MenuDataLoaderServiceImpl } from './infrastructure/menu-data-loader.serviceimpl';
import { MenuPageComponent } from './presentation/menu-page/menu-page.component';
import { ListItemComponent } from './presentation/component/list-item/list-item.component';
import { GridItemComponent } from './presentation/component/grid-item/grid-item.component';



@NgModule({
  declarations: [MenuPageComponent, ListItemComponent, GridItemComponent],
  imports: [CommonModule],
  exports: [MenuPageComponent],
  providers: [
    { provide: MenuDataLoaderService, useClass: MenuDataLoaderServiceImpl },
  ],
})
export class MenuModule { }
