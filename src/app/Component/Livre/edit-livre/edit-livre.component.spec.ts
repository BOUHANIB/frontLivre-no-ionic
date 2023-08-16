import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLivreComponent } from './edit-livre.component';

describe('EditLivreComponent', () => {
  let component: EditLivreComponent;
  let fixture: ComponentFixture<EditLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLivreComponent]
    });
    fixture = TestBed.createComponent(EditLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
