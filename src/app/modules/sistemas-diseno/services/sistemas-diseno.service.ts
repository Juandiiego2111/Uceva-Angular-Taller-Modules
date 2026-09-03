import { Injectable } from '@angular/core';
import { SISTEMAS_DISENO_CONTENIDO } from '../../../core/config/sistemas-diseno.config';
import {
  ContenidoSistemasDiseno,
  NivelAtomico,
  ProblemaSinSistema,
  SeccionContenido,
} from '../interfaces/sistema-diseno.interface';

/**
 * Servicio de datos del módulo "Sistemas de Diseño".
 *
 * @remarks
 * Actúa como única fuente de verdad para la página principal: toma la data
 * estática y tipada de `core/config/sistemas-diseno.config.ts` y la expone
 * mediante métodos concretos. La página nunca lee la configuración
 * directamente ni guarda texto en el HTML; siempre pasa por este servicio.
 *
 * Sigue el patrón del taller de modularidad:
 * **interfaz de tipado → servicio con la data → página que la consume**.
 *
 * @example
 * ```ts
 * constructor(private sistemasDiseno: SistemasDisenoService) {}
 *
 * ngOnInit(): void {
 *   this.niveles = this.sistemasDiseno.obtenerNivelesAtomicos();
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SistemasDisenoService {
  /**
   * Copia local del contenido definido en la configuración del core.
   *
   * @remarks
   * Se guarda como propiedad privada para que el resto de la aplicación
   * solo pueda acceder a través de los métodos públicos del servicio.
   */
  private readonly contenido: ContenidoSistemasDiseno = SISTEMAS_DISENO_CONTENIDO;

  /**
   * Devuelve el contenido completo del módulo.
   *
   * @returns Objeto con todas las secciones, problemas y niveles atómicos.
   */
  obtenerContenido(): ContenidoSistemasDiseno {
    return this.contenido;
  }

  /**
   * Devuelve las secciones teóricas en el orden en que deben mostrarse
   * en la página: qué es, por qué usarlo, problemas, componentes clave
   * y diseño atómico.
   *
   * @returns Arreglo ordenado de secciones de contenido.
   */
  obtenerSecciones(): SeccionContenido[] {
    return [
      this.contenido.queEs,
      this.contenido.porQueUsarlo,
      this.contenido.problemasSinSistema,
      this.contenido.componentesClave,
      this.contenido.sistemaAtomico,
    ];
  }

  /**
   * Devuelve la lista de problemas frecuentes de trabajar sin un sistema
   * de diseño, cada uno con la forma en que un sistema de diseño lo resuelve.
   *
   * @returns Arreglo de problemas y sus soluciones.
   */
  obtenerProblemas(): ProblemaSinSistema[] {
    return this.contenido.problemas;
  }

  /**
   * Devuelve los cinco niveles del diseño atómico de Brad Frost,
   * ordenados de lo más simple (átomos) a lo más complejo (páginas).
   *
   * @returns Arreglo ordenado de niveles atómicos.
   */
  obtenerNivelesAtomicos(): NivelAtomico[] {
    return this.contenido.nivelesAtomicos;
  }
}
