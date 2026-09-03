import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ListadoPrincipiosComponent } from './listado-principios.component';
import { PrincipiosService } from '../../services/principios.service';
import { TablaResumenPrincipiosComponent } from '../../components/tabla-resumen-principios/tabla-resumen-principios.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { PRINCIPIOS } from '../../../../core/config/principios.config';

describe('ListadoPrincipiosComponent', () => {
  let component: ListadoPrincipiosComponent;
  let fixture: ComponentFixture<ListadoPrincipiosComponent>;

  beforeEach(async () => {
    const mockService = {
      getAllPrincipios: jest.fn(() => of(PRINCIPIOS))
    };

    await TestBed.configureTestingModule({
      declarations: [
        ListadoPrincipiosComponent,
        TablaResumenPrincipiosComponent,
        BadgeComponent
      ],
      providers: [
        { provide: PrincipiosService, useValue: mockService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPrincipiosComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar principios como un arreglo vacío', () => {
    expect(component.principios).toEqual([]);
  });

  it('debería poblar el arreglo principios al ngOnInit()', () => {
    component.ngOnInit();
    expect(component.principios).toEqual(PRINCIPIOS);
    expect(component.principios.length).toBe(4);
  });

  it('debería renderizar el componente app-tabla-resumen-principios', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const tabla = fixture.debugElement.query(By.css('app-tabla-resumen-principios'));
    expect(tabla).toBeTruthy();
  });

  it('debería pasar los principios al componente hijo', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const child = fixture.debugElement.query(By.css('app-tabla-resumen-principios'));
    const childComponent = child.componentInstance as TablaResumenPrincipiosComponent;
    expect(childComponent.principios.length).toBe(4);
  });
});
