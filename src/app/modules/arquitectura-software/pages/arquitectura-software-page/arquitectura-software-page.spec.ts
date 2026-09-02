import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturaSoftwarePage } from './arquitectura-software-page';

describe('ArquitecturaSoftwarePage', () => {
  let component: ArquitecturaSoftwarePage;
  let fixture: ComponentFixture<ArquitecturaSoftwarePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArquitecturaSoftwarePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquitecturaSoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
