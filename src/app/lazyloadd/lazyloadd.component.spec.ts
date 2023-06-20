import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloaddComponent } from './lazyloadd.component';

describe('LazyloaddComponent', () => {
  let component: LazyloaddComponent;
  let fixture: ComponentFixture<LazyloaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
