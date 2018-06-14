import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostenComponent } from './mosten.component';

describe('MostenComponent', () => {
  let component: MostenComponent;
  let fixture: ComponentFixture<MostenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
