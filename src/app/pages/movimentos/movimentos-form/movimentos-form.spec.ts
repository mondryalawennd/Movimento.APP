import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentosForm } from './movimentos-form';

describe('MovimentosForm', () => {
  let component: MovimentosForm;
  let fixture: ComponentFixture<MovimentosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentosForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentosForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
