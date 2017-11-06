import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCompComponent } from './java-comp.component';

describe('JavaCompComponent', () => {
  let component: JavaCompComponent;
  let fixture: ComponentFixture<JavaCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
