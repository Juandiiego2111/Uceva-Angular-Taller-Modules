import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PrincipioArquitectura, CategoriaPrincipio } from '../interfaces/principios.interface';
import { PRINCIPIOS } from '../../../core/config/principios.config';

/**
 * Servicio encargado de gestionar los principios de arquitectura de software.
 *
 * @remarks
 * Proporciona operaciones para obtener el catálogo completo de principios
 * arquitectónicos, así como para buscar un principio específico según su
 * categoría. Internamente utiliza un Observable (`of` de RxJS) para simular
 * respuestas asíncronas, manteniendo coherencia con el patrón de servicios
 * similares en la aplicación (por ejemplo, {@link ProductsService}).
 *
 * El servicio está registrado en la raíz (`providedIn: 'root'`) y utiliza la
 * constante {@link PRINCIPIOS} como fuente de datos.
 *
 * @example
 * ```ts
 * const service = inject(PrincipiosService);
 * service.getAllPrincipios().subscribe(principios => console.log(principios));
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PrincipiosService {

  /**
   * Obtiene el listado completo de principios de arquitectura disponibles.
   *
   * @returns {Observable<PrincipioArquitectura[]>}
   * Un Observable que emite el arreglo de principios definido en {@link PRINCIPIOS}.
   *
   * @example
   * ```ts
   * service.getAllPrincipios().subscribe(result => {
   *   console.log(`Existen ${result.length} principios registrados.`);
   * });
   * ```
   */
  getAllPrincipios(): Observable<PrincipioArquitectura[]> {
    return of(PRINCIPIOS);
  }

  /**
   * Obtiene el primer principio que pertenece a la categoría especificada.
   *
   * @param {CategoriaPrincipio} categoria
   *   La categoría a buscar dentro del catálogo de principios.
   *
   * @returns {Observable<PrincipioArquitectura | undefined>}
   *   Un Observable que emite el primer principio cuya {@link PrincipioArquitectura.categoria}
   *   coincide con el valor proporcionado, o `undefined` cuando no existe ninguno.
   *
   * @example
   * ```ts
   * service.getPrincipioPorCategoria('Cohesion').subscribe(result => {
   *   if (result) {
   *     console.log(`Encontrado: ${result.nombre}`);
   *   }
   * });
   * ```
   */
  getPrincipioPorCategoria(categoria: CategoriaPrincipio): Observable<PrincipioArquitectura | undefined> {
    const principio = PRINCIPIOS.find(p => p.categoria === categoria);
    return of(principio);
  }
}
