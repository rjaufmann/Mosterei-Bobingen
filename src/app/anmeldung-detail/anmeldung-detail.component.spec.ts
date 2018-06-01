import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldungDetailComponent } from './anmeldung-detail.component';

describe('AnmeldungDetailComponent', () => {
  let component: AnmeldungDetailComponent;
  let fixture: ComponentFixture<AnmeldungDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmeldungDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
