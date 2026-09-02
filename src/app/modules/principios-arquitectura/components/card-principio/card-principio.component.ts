import { Component, Input } from '@angular/core';
import { PrincipioArquitectura } from '../../interfaces/principios.interface';
import { BadgeType } from '../../../shared/interfaces/badge.interface';

/**
 * Componente visual tipo tarjeta que muestra un principio de arquitectura.
 *
 * @remarks
 * Presenta la información detallada de un {@link PrincipioArquitectura}: nombre,
 * nivel deseado (representado mediante un `<app-badge>`), descripción,
 * beneficios y ejemplos correctos e incorrectos.
 *
 * Es un componente presentacional: recibe los datos por medio de
 * {@link card-principio.component.ts@Input} y no realiza lógica de negocio.
 *
 * @example
 * ```html
 * <app-card-principio [principio]="principioSeleccionado"></app-card-principio>
 * ```
 */
@Component({
  selector: 'app-card-principio',
  standalone: false,
  templateUrl: './card-principio.component.html',
  styleUrl: './card-principio.component.scss',
})
export class CardPrincipioComponent {
  /**
   * Principio de arquitectura a mostrar en la tarjeta.
   *
   * @remarks
   * Contiene nombre, categoría, nivel deseado, descripción, beneficios
   * y ejemplos correctos/incorrectos del principio.
   *
   * @defaultValue undefined
   */
  @Input() principio!: PrincipioArquitectura;

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
