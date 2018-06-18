import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcgasComponent } from './alcgas.component';

describe('AlcgasComponent', () => {
  let component: AlcgasComponent;
  let fixture: ComponentFixture<AlcgasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcgasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
