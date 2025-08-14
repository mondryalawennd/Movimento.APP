import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentosGrid } from './movimentos-grid';

describe('MovimentosGrid', () => {
  let component: MovimentosGrid;
  let fixture: ComponentFixture<MovimentosGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentosGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentosGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
