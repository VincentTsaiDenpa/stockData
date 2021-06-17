import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { AComponent } from './a/a.component';
import { DataService } from './data.service';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockPrimengComponent } from './stock-primeng/stock-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    StockFormComponent,
    StockListComponent,
    StockPrimengComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, TableModule, ButtonModule, TabViewModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
