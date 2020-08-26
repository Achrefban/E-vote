import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteursStatsComponent } from './electeurs-stats.component';

describe('ElecteursStatsComponent', () => {
  let component: ElecteursStatsComponent;
  let fixture: ComponentFixture<ElecteursStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteursStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteursStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
