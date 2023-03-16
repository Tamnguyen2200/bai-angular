import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftImportComponent } from './menu-left-import.component';

describe('MenuLeftImportComponent', () => {
  let component: MenuLeftImportComponent;
  let fixture: ComponentFixture<MenuLeftImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLeftImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLeftImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
