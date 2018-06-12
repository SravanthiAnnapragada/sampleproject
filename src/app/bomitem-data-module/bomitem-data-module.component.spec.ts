import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOMItemDataModuleComponent } from './bomitem-data-module.component';

describe('BOMItemDataModuleComponent', () => {
  let component: BOMItemDataModuleComponent;
  let fixture: ComponentFixture<BOMItemDataModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOMItemDataModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOMItemDataModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
