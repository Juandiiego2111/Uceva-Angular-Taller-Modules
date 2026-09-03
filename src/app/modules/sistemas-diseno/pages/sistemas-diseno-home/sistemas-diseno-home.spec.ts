import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasDisenoHome } from './sistemas-diseno-home';
import { SharedModule } from '../../../shared/shared-module';

describe('SistemasDisenoHome', () => {
  let component: SistemasDisenoHome;
  let fixture: ComponentFixture<SistemasDisenoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [SistemasDisenoHome],
    }).compileComponents();

    fixture = TestBed.createComponent(SistemasDisenoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('carga el contenido y los niveles atómicos desde el servicio', () => {
    expect(component.contenido).toBeTruthy();
    expect(component.problemas.length).toBeGreaterThan(0);
    expect(component.niveles.length).toBe(5);
  });
});
