import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposantComponent } from './exposant.component';

describe('ExposantComponent', () => {
  let component: ExposantComponent;
  let fixture: ComponentFixture<ExposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExposantComponent]
    });
    fixture = TestBed.createComponent(ExposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
