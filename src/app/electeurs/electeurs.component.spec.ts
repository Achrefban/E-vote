import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteursComponent } from './electeurs.component';

describe('ElecteursComponent', () => {
  let component: ElecteursComponent;
  let fixture: ComponentFixture<ElecteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
