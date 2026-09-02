import { Component, Input } from '@angular/core';
import { PrincipioArquitectura } from '../../interfaces/principios.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

/**
 * Componente de tabla que muestra un resumen de los principios de arquitectura.
 *
 * @remarks
 * Recibe un arreglo de {@link PrincipioArquitectura} y los presenta en una tabla
 * con las columnas Nombre, Nivel deseado y Descripción. El nivel deseado se
 * visualiza mediante el componente {@link BadgeComponent} (selector `app-badge`),
 * lo que garantiza consistencia visual con el sistema de diseño.
 *
 * @example
 * ```html
 * <app-tabla-resumen-principios [principios]="listaDePrincipios"></app-tabla-resumen-principios>
 * ```
 */
@Component({
  selector: 'app-tabla-resumen-principios',
  standalone: false,
  templateUrl: './tabla-resumen-principios.component.html',
  styleUrl: './tabla-resumen-principios.component.scss',
})
export class TablaResumenPrincipiosComponent {
  /**
   * Lista de principios de arquitectura a mostrar en la tabla.
   *
   * @remarks
   * Cada elemento se renderiza como una fila con su nombre, nivel deseado
   * (representado mediante un `<app-badge>`) y descripción.
   *
   * @defaultValue []
   */
  @Input() principios: PrincipioArquitectura[] = [];

  /**
   * Mapa de colores del badge según el nivel deseado del principio.
   *
   * @remarks
   * Ambos valores (`'Alto'` y `'Bajo'`) se mapean a `'success'` porque
   * representan la práctica deseada dentro de cada principio arquitectónico.
   */
  categoryMap: Record<'Alto' | 'Bajo', BadgeType> = {
    'Alto': 'success',
    'Bajo': 'success'
  }
}
