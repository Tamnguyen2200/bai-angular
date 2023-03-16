import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSearchBarComponent } from './import-search-bar.component';

describe('ImportSearchBarComponent', () => {
  let component: ImportSearchBarComponent;
  let fixture: ComponentFixture<ImportSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
