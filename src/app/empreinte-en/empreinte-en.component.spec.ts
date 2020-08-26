import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreinteEnComponent } from './empreinte-en.component';

describe('EmpreinteEnComponent', () => {
  let component: EmpreinteEnComponent;
  let fixture: ComponentFixture<EmpreinteEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreinteEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreinteEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
