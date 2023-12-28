import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusinessUnitComponent } from './search-business-unit.component';

describe('SearchBusinessUnitComponent', () => {
  let component: SearchBusinessUnitComponent;
  let fixture: ComponentFixture<SearchBusinessUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBusinessUnitComponent]
    });
    fixture = TestBed.createComponent(SearchBusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
