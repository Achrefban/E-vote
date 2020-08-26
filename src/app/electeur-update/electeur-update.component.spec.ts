import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurUpdateComponent } from './electeur-update.component';

describe('ElecteurUpdateComponent', () => {
  let component: ElecteurUpdateComponent;
  let fixture: ComponentFixture<ElecteurUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteurUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
