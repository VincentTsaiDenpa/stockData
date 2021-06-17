import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DataService } from './../data.service';
import { StockContent } from './../stock-form/stock-content';
import { StockField } from './stock-field';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockList: any[] = [];
  stockMap={};
  fieldMap={};
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData$().subscribe((datas) => {
      for (var key in datas) {
        var num_g = key.match(/\d+/)
        if (key.includes('data')) {
          const contentArr:StockContent[] = [];
          for (var i in datas[key]) {
            const content: StockContent = {
              name: datas[key][i][0],
              endedVal: datas[key][i][1],
              status: datas[key][i][2],
              changes: datas[key][i][3],
              percentage: datas[key][i][4],
              mark: datas[key][i][5]
            };
            contentArr.push(content);
          }

          this.stockList.push(contentArr);
          this.stockMap[num_g[0]]=contentArr;
        }
        else if(key.includes('fields')){
          this.fieldMap[num_g[0]]=datas[key];
        }
        // else if(key.includes('fields')){
        //   const field:StockField = {
        //       name: datas[key][0],
        //       endedVal: datas[key][1],
        //       status: datas[key][2],
        //       changes: datas[key][3],
        //       percentage: datas[key][4],
        //       mark: datas[key][5]
        //   };

        //   this.fieldMap[num_g[0]]=field;
        // }
      }
    });
  }
}
