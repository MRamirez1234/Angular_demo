import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirComponent } from './Dir.component';

describe('DirComponent', () => {
  let component: DirComponent;
  let fixture: ComponentFixture<DirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
