import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeptModuleComponent } from './material-dept-module.component';

describe('MaterialDeptModuleComponent', () => {
  let component: MaterialDeptModuleComponent;
  let fixture: ComponentFixture<MaterialDeptModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDeptModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeptModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
