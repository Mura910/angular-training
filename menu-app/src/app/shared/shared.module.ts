import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDataLoader } from './domain/menu-data-loader';
import { ApiDummyService } from './infrastructure/api-dummy.service';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: MenuDataLoader, useClass: ApiDummyService }],
})
export class SharedModule { }
