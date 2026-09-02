import { TestBed } from '@angular/core/testing';
import { PrincipiosService } from './principios.service';
import { PRINCIPIOS } from '../../../core/config/principios.config';
import { CategoriaPrincipio } from '../interfaces/principios.interface';

describe('PrincipiosService', () => {
  let service: PrincipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllPrincipios', () => {
    it('debería retornar los 4 principios registrados', (done) => {
      service.getAllPrincipios().subscribe({
        next: (principios) => {
          expect(principios).toBe(PRINCIPIOS);
          expect(principios.length).toBe(4);
          done();
        },
        error: () => done.fail('No debería emitir error')
      });
    });

    it('debería contener las categorías esperadas', (done) => {
      service.getAllPrincipios().subscribe({
        next: (principios) => {
          const categorias = principios.map(p => p.categoria);
          expect(categorias).toContain('Modularidad');
          expect(categorias).toContain('Cohesion');
          expect(categorias).toContain('Acoplamiento');
          expect(categorias).toContain('SeparacionResponsabilidades');
          done();
        },
        error: () => done.fail('No debería emitir error')
      });
    });
  });

  describe('getPrincipioPorCategoria', () => {
    it('debería encontrar el principio correcto por categoría', (done) => {
      const categoria: CategoriaPrincipio = 'Modularidad';
      service.getPrincipioPorCategoria(categoria).subscribe({
        next: (principio) => {
          expect(principio).toBeTruthy();
          expect(principio?.categoria).toBe('Modularidad');
          expect(principio?.nombre).toBe('Modularidad');
          done();
        },
        error: () => done.fail('No debería emitir error')
      });
    });

    it('debería retornar undefined si la categoría no existe', (done) => {
      const categoria = 'Inexistente' as CategoriaPrincipio;
      service.getPrincipioPorCategoria(categoria).subscribe({
        next: (principio) => {
          expect(principio).toBeUndefined();
          done();
        },
        error: () => done.fail('No debería emitir error')
      });
    });
  });
});
