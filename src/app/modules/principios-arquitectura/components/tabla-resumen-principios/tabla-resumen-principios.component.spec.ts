import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TablaResumenPrincipiosComponent } from './tabla-resumen-principios.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { PRINCIPIOS } from '../../../../core/config/principios.config';

describe('TablaResumenPrincipiosComponent', () => {
  let component: TablaResumenPrincipiosComponent;
  let fixture: ComponentFixture<TablaResumenPrincipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaResumenPrincipiosComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaResumenPrincipiosComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('debería inicializar principios como un arreglo vacío', () => {
    fixture.detectChanges();
    expect(component.principios).toEqual([]);
  });

  it('debería renderizar una fila por cada principio recibido', () => {
    component.principios = PRINCIPIOS;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(PRINCIPIOS.length);
  });

  it('debería mostrar el nombre del principio en cada fila', () => {
    component.principios = PRINCIPIOS;
    fixture.detectChanges();

    const cells = fixture.debugElement.queryAll(By.css('tbody td:first-child'));
    cells.forEach((cell, index) => {
      expect(cell.nativeElement.textContent).toBe(PRINCIPIOS[index].nombre);
    });
  });

  it('debería renderizar un app-badge por fila para el nivel deseado', () => {
    component.principios = PRINCIPIOS;
    fixture.detectChanges();

    const badges = fixture.debugElement.queryAll(By.css('tbody app-badge'));
    expect(badges.length).toBe(PRINCIPIOS.length);
  });
});
