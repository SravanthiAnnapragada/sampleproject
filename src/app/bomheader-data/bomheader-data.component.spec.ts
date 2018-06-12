import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOMHeaderDataComponent } from './bomheader-data.component';

describe('BOMHeaderDataComponent', () => {
  let component: BOMHeaderDataComponent;
  let fixture: ComponentFixture<BOMHeaderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOMHeaderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOMHeaderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
