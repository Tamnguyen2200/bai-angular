import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEXlsComponent } from './export-exls.component';

describe('ExportEXlsComponent', () => {
  let component: ExportEXlsComponent;
  let fixture: ComponentFixture<ExportEXlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEXlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportEXlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
