import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPrimengComponent } from './stock-primeng.component';

describe('StockPrimengComponent', () => {
  let component: StockPrimengComponent;
  let fixture: ComponentFixture<StockPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
