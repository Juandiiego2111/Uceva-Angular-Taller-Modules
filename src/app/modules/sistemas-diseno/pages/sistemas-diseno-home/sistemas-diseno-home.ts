import { Component, OnInit } from '@angular/core';
import { SistemasDisenoService } from '../../services/sistemas-diseno.service';
import {
  ContenidoSistemasDiseno,
  NivelAtomico,
  ProblemaSinSistema,
} from '../../interfaces/sistema-diseno.interface';

/**
 * Página principal del módulo "Sistemas de Diseño".
 *
 * @remarks
 * Solo se encarga de pedir la data a `SistemasDisenoService` y de exponerla
 * a la plantilla. No define texto propio: todo el contenido llega desde el
 * servicio y se recorre en el HTML con `*ngFor` / `*ngIf`.
 *
 * Muestra, en orden: qué es un sistema de diseño, por qué usarlo, los
 * problemas de no tener uno, sus componentes clave y los cinco niveles del
 * diseño atómico con sus ejemplos.
 *
 * @example
 * ```html
 * <app-sistemas-diseno-home></app-sistemas-diseno-home>
 * ```
 */
@Component({
  selector: 'app-sistemas-diseno-home',
  standalone: false,
  templateUrl: './sistemas-diseno-home.html',
  styleUrl: './sistemas-diseno-home.scss',
})
export class SistemasDisenoHome implements OnInit {
  /**
   * Contenido teórico completo del módulo (secciones y textos).
   */
  contenido!: ContenidoSistemasDiseno;

  /**
   * Problemas de trabajar sin un sistema de diseño y su solución.
   */
  problemas: ProblemaSinSistema[] = [];

  /**
   * Niveles del diseño atómico, de átomos a páginas.
   */
  niveles: NivelAtomico[] = [];

  /**
   * Inyecta el servicio de datos del módulo.
   *
   * @param sistemasDisenoService Servicio que provee el contenido del módulo.
   */
  constructor(private readonly sistemasDisenoService: SistemasDisenoService) {}

  /**
   * Carga el contenido desde el servicio al inicializar la página.
   */
  ngOnInit(): void {
    this.contenido = this.sistemasDisenoService.obtenerContenido();
    this.problemas = this.sistemasDisenoService.obtenerProblemas();
    this.niveles = this.sistemasDisenoService.obtenerNivelesAtomicos();
  }

  /**
   * Función de rastreo para `*ngFor` sobre los niveles atómicos.
   *
   * @param _indice Índice del elemento (no se usa).
   * @param nivel Nivel atómico actual.
   * @returns Nombre del nivel, que es único en la lista.
   */
  trackPorNivel(_indice: number, nivel: NivelAtomico): string {
    return nivel.nombre;
  }
}
