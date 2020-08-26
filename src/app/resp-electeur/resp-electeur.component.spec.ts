import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespElecteurComponent } from './resp-electeur.component';

describe('RespElecteurComponent', () => {
  let component: RespElecteurComponent;
  let fixture: ComponentFixture<RespElecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespElecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespElecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
