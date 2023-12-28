import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessUnitComponent } from './add-business-unit.component';

describe('AddBusinessUnitComponent', () => {
  let component: AddBusinessUnitComponent;
  let fixture: ComponentFixture<AddBusinessUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBusinessUnitComponent]
    });
    fixture = TestBed.createComponent(AddBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
