import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftReportComponent } from './menu-left-report.component';

describe('MenuLeftReportComponent', () => {
  let component: MenuLeftReportComponent;
  let fixture: ComponentFixture<MenuLeftReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLeftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
