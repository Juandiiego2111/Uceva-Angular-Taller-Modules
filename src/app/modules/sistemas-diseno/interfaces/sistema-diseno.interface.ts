/**
 * Sección de contenido teórico del módulo "Sistemas de Diseño".
 *
 * @remarks
 * Cada sección representa un bloque explicativo de la página principal
 * (qué es, por qué usarlo, componentes clave, etc.). El texto se mantiene
 * centralizado en la configuración para que la página nunca use datos
 * incrustados directamente en el HTML.
 *
 * @example
 * ```ts
 * const seccion: SeccionContenido = {
 *   id: 'que-es',
 *   titulo: '¿Qué es un sistema de diseño?',
 *   descripcion: 'Conjunto de reglas y componentes reutilizables...',
 *   puntos: ['Da consistencia visual', 'Conecta diseño y desarrollo'],
 * };
 * ```
 */
export interface SeccionContenido {
  /**
   * Identificador único de la sección.
   *
   * @remarks
   * Útil como `trackBy` en `*ngFor` y como ancla dentro de la página.
   */
  id: string;

  /**
   * Título visible de la sección.
   */
  titulo: string;

  /**
   * Párrafo introductorio que resume la idea principal de la sección.
   */
  descripcion: string;

  /**
   * Lista opcional de ideas puntuales que amplían la descripción.
   *
   * @remarks
   * Se recorre con `*ngFor` en la plantilla. Es opcional porque hay
   * secciones que solo necesitan un párrafo.
   */
  puntos?: string[];
}

/**
 * Problema típico que aparece en un frontend cuando no existe un
 * sistema de diseño, junto con la forma en que un sistema de diseño lo mitiga.
 *
 * @remarks
 * La página usa el componente compartido `app-badge` para marcar el
 * contraste: un badge de peligro (✗) para el problema y uno de éxito (✓)
 * para la solución.
 *
 * @example
 * ```ts
 * const problema: ProblemaSinSistema = {
 *   problema: 'Componentes duplicados en cada pantalla',
 *   solucionConSistema: 'Una única librería de componentes reutilizables',
 * };
 * ```
 */
export interface ProblemaSinSistema {
  /**
   * Descripción del problema que se produce al no tener un sistema de diseño.
   */
  problema: string;

  /**
   * Descripción de cómo un sistema de diseño resuelve o reduce ese problema.
   */
  solucionConSistema: string;
}

/**
 * Nivel del diseño atómico de Brad Frost.
 *
 * @remarks
 * El diseño atómico organiza la interfaz en cinco niveles jerárquicos,
 * desde las piezas más simples (átomos) hasta las páginas finales. Cada
 * nivel se compone de elementos del nivel anterior.
 *
 * @example
 * ```ts
 * const nivel: NivelAtomico = {
 *   nombre: 'Átomos',
 *   icono: 'circle',
 *   descripcion: 'Elementos básicos que definen el estilo base.',
 *   ejemplos: ['Input', 'Button', 'Badge', 'Label'],
 * };
 * ```
 */
export interface NivelAtomico {
  /**
   * Nombre del nivel (Átomos, Moléculas, Organismos, Plantillas, Páginas).
   */
  nombre: string;

  /**
   * Nombre del ícono de Bootstrap Icons (sin el prefijo `bi-`) que
   * acompaña visualmente al nivel mediante el componente `app-icon`.
   */
  icono: string;

  /**
   * Explicación breve de qué representa el nivel dentro de la jerarquía.
   */
  descripcion: string;

  /**
   * Ejemplos concretos del nivel, tomados de Bootstrap 5.
   *
   * @remarks
   * Puede venir vacío en los niveles que no tienen un ejemplo directo
   * de componente (Plantillas y Páginas).
   */
  ejemplos: string[];
}

/**
 * Contenido completo del módulo "Sistemas de Diseño".
 *
 * @remarks
 * Es el tipo que da forma a la configuración estática guardada en
 * `core/config/sistemas-diseno.config.ts` y que el servicio expone a la
 * página principal.
 */
export interface ContenidoSistemasDiseno {
  /**
   * Sección "¿Qué es un sistema de diseño?".
   */
  queEs: SeccionContenido;

  /**
   * Sección "¿Por qué usar un sistema de diseño?".
   */
  porQueUsarlo: SeccionContenido;

  /**
   * Sección introductoria a los problemas de trabajar sin un sistema de diseño.
   */
  problemasSinSistema: SeccionContenido;

  /**
   * Lista de problemas frecuentes y su solución con un sistema de diseño.
   */
  problemas: ProblemaSinSistema[];

  /**
   * Sección "Componentes clave de un sistema de diseño".
   */
  componentesClave: SeccionContenido;

  /**
   * Sección introductoria al diseño atómico de Brad Frost.
   */
  sistemaAtomico: SeccionContenido;

  /**
   * Los cinco niveles del diseño atómico, en orden jerárquico.
   */
  nivelesAtomicos: NivelAtomico[];
}
