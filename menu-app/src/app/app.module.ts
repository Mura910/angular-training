import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],  
  bootstrap: [AppComponent],
  imports: [BrowserModule, MenuModule, SharedModule]
})
export class AppModule { }
