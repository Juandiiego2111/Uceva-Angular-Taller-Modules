import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardPrincipioComponent } from './card-principio.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { PrincipioArquitectura } from '../../interfaces/principios.interface';

describe('CardPrincipioComponent', () => {
  let component: CardPrincipioComponent;
  let fixture: ComponentFixture<CardPrincipioComponent>;

  const principioMock: PrincipioArquitectura = {
    id: 1,
    nombre: 'Modularidad',
    categoria: 'Modularidad',
    nivelDeseado: 'Alto',
    descripcion: 'Divide el sistema en módulos con una función específica.',
    beneficios: ['Facilita el trabajo en equipo', 'Reduce la complejidad del sistema'],
    ejemploCorrecto: 'Una tienda online dividida en módulos independientes.',
    ejemploIncorrecto: 'Todo el código de la tienda en un solo archivo gigante.'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPrincipioComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrincipioComponent);
    component = fixture.componentInstance;
    component.principio = principioMock;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el nombre del principio', () => {
    const title = fixture.debugElement.query(By.css('.card-title'));
    expect(title.nativeElement.textContent).toBe('Modularidad');
  });

  it('debería renderizar el badge con el nivel deseado', () => {
    const badge = fixture.debugElement.query(By.css('app-badge span'));
    expect(badge.nativeElement.textContent).toContain('Alto');
  });

  it('debería renderizar la descripción', () => {
    const cardText = fixture.debugElement.query(By.css('.card-text'));
    expect(cardText.nativeElement.textContent).toContain('Divide el sistema en módulos');
  });

  it('debería renderizar un item por cada beneficio', () => {
    const items = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(items.length).toBe(principioMock.beneficios.length);
  });

  it('debería renderizar el ejemplo correcto con marca ✅', () => {
    const successAlert = fixture.debugElement.query(By.css('.alert-success'));
    expect(successAlert).toBeTruthy();
    expect(successAlert.nativeElement.textContent).toContain('✅');
    expect(successAlert.nativeElement.textContent).toContain(principioMock.ejemploCorrecto);
  });

  it('debería renderizar el ejemplo incorrecto con marca ❌', () => {
    const dangerAlert = fixture.debugElement.query(By.css('.alert-danger'));
    expect(dangerAlert).toBeTruthy();
    expect(dangerAlert.nativeElement.textContent).toContain('❌');
    expect(dangerAlert.nativeElement.textContent).toContain(principioMock.ejemploIncorrecto);
  });
});
