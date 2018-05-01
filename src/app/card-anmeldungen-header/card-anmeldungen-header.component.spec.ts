import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnmeldungenHeaderComponent } from './card-anmeldungen-header.component';

describe('CardAnmeldungenHeaderComponent', () => {
  let component: CardAnmeldungenHeaderComponent;
  let fixture: ComponentFixture<CardAnmeldungenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAnmeldungenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnmeldungenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
