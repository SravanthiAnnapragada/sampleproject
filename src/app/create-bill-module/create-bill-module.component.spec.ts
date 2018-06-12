import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillModuleComponent } from './create-bill-module.component';

describe('CreateBillModuleComponent', () => {
  let component: CreateBillModuleComponent;
  let fixture: ComponentFixture<CreateBillModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBillModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
