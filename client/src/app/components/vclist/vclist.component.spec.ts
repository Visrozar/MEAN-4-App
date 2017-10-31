import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VclistComponent } from './vclist.component';

describe('VclistComponent', () => {
  let component: VclistComponent;
  let fixture: ComponentFixture<VclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
