import { Component, OnInit, inject } from '@angular/core';
import { PrincipioArquitectura } from '../../interfaces/principios.interface';
import { PrincipiosService } from '../../services/principios.service';

/**
 * Página principal del módulo de Principios de Arquitectura.
 *
 * @remarks
 * Componente contenedor (smart) que consume el {@link PrincipiosService} para
 * obtener el catálogo de principios arquitectónicos y los entrega al componente
 * presentacional {@link TablaResumenPrincipiosComponent} para su visualización.
 *
 * @example
 * ```html
 * <app-listado-principios></app-listado-principios>
 * ```
 */
@Component({
  selector: 'app-listado-principios',
  standalone: false,
  templateUrl: './listado-principios.component.html',
  styleUrl: './listado-principios.component.scss',
})
export class ListadoPrincipiosComponent implements OnInit {
  /**
   * Arreglo de principios arquitectónicos obtenidos del servicio.
   *
   * @remarks
   * Se inicializa vacío y se popula tras la llamada a
   * {@link PrincipiosService.getAllPrincipios | getAllPrincipios()}.
   */
  principios: PrincipioArquitectura[] = [];

  /**
   * Servicio que gestiona los principios arquitectónicos.
   */
  private principiosService = inject(PrincipiosService);

  /**
   * Inicializa el componente suscribiéndose al catálogo de principios.
   */
  ngOnInit(): void {
    this.principiosService.getAllPrincipios().subscribe({
      next: (principios) => {
        this.principios = principios;
        console.log(principios);
      },
      error: (error) => console.error(error),
    });
  }
}
