import { TestBed } from '@angular/core/testing';

import { SistemasDisenoService } from './sistemas-diseno.service';

describe('SistemasDisenoService', () => {
  let service: SistemasDisenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasDisenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expone las cinco secciones en orden', () => {
    const secciones = service.obtenerSecciones();
    expect(secciones.map((s) => s.id)).toEqual([
      'que-es',
      'por-que-usarlo',
      'problemas-sin-sistema',
      'componentes-clave',
      'sistema-atomico',
    ]);
  });

  it('expone los cinco niveles del diseño atómico', () => {
    const niveles = service.obtenerNivelesAtomicos();
    expect(niveles.map((n) => n.nombre)).toEqual([
      'Átomos',
      'Moléculas',
      'Organismos',
      'Plantillas',
      'Páginas',
    ]);
  });

  it('cada problema incluye su solución con un sistema de diseño', () => {
    const problemas = service.obtenerProblemas();
    expect(problemas.length).toBeGreaterThan(0);
    problemas.forEach((p) => {
      expect(p.problema.length).toBeGreaterThan(0);
      expect(p.solucionConSistema.length).toBeGreaterThan(0);
    });
  });
});
