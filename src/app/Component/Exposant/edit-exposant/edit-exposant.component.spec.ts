import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExposantComponent } from './edit-exposant.component';

describe('EditExposantComponent', () => {
  let component: EditExposantComponent;
  let fixture: ComponentFixture<EditExposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExposantComponent]
    });
    fixture = TestBed.createComponent(EditExposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
