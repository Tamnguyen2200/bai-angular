import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEXlsComponent } from './import-exls.component';

describe('ImportEXlsComponent', () => {
  let component: ImportEXlsComponent;
  let fixture: ComponentFixture<ImportEXlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEXlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportEXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
