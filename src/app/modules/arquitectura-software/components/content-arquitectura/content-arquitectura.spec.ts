import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentArquitectura } from './content-arquitectura';

describe('ContentArquitectura', () => {
  let component: ContentArquitectura;
  let fixture: ComponentFixture<ContentArquitectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentArquitectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentArquitectura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
