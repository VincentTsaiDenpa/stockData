import { Component, OnInit, Input } from '@angular/core';
import { StockContent } from './stock-content';
import { StockField } from './../stock-list/stock-field';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  @Input() stockContent:[];
  @Input() stockField:[];
  constructor() {}

  ngOnInit() {
    //console.log(this.stockList.length);
    //this.stockList.forEach((stock:StockContent)=>{console.log(stock)});
  }
}
