import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-primeng',
  templateUrl: './stock-primeng.component.html',
  styleUrls: ['./stock-primeng.component.scss']
})
export class StockPrimengComponent implements OnInit {
  @Input() stockContent:[];
  @Input() stockField:[];

  constructor() { }

  ngOnInit(): void {
  }

}
