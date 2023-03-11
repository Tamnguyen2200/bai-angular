import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbarsideComponent } from './leftbarside.component';

describe('LeftbarsideComponent', () => {
  let component: LeftbarsideComponent;
  let fixture: ComponentFixture<LeftbarsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftbarsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftbarsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
