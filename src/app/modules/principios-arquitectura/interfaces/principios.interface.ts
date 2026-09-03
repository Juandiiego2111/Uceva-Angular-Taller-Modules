/**
 * Representa un principio de arquitectura de software.
 *
 * @remarks
 * Cada principio describe un concepto clave (por ejemplo, cohesión o acoplamiento)
 * que guía el diseño de módulos y la organización del código fuente.
 *
 * @type {PrincipioArquitectura}
 *
 * @example
 * ```ts
 * const principio: PrincipioArquitectura = {
 *   id: 1,
 *   nombre: 'Modularidad',
 *   categoria: 'Modularidad',
 *   nivelDeseado: 'Alto',
 *   descripcion: 'Divide el sistema en módulos...',
 *   beneficios: ['Facilita el trabajo en equipo', 'Reduce la complejidad'],
 *   ejemploCorrecto: 'Una tienda online dividida en módulos independientes',
 *   ejemploIncorrecto: 'Todo el código en un solo archivo gigante'
 * };
 * ```
 */
export interface PrincipioArquitectura {
    /**
     * Identificador único del principio.
     */
    id: number;

    /**
     * Nombre descriptivo del principio de arquitectura.
     */
    nombre: string;

    /**
     * Categoría a la que pertenece el principio.
     *
     * @remarks
     * Determina el grupo temático que clasifica el principio.
     */
    categoria: CategoriaPrincipio;

    /**
     * Nivel deseado de cumplimiento del principio.
     *
     * @remarks
     * - `'Alto'` indica que se busca maximizar este principio.
     * - `'Bajo'` indica que se busca minimizar este principio.
     */
    nivelDeseado: 'Alto' | 'Bajo';

    /**
     * Descripción detallada del principio y su importancia.
     */
    descripcion: string;

    /**
     * Lista de beneficios obtenidos al aplicar correctamente el principio.
     */
    beneficios: string[];

    /**
     * Ejemplo que ilustra la correcta aplicación del principio.
     */
    ejemploCorrecto: string;

    /**
     * Ejemplo que muestra la violación o mala aplicación del principio.
     */
    ejemploIncorrecto: string;
}

/**
 * Categorías de principios de arquitectura disponibles.
 *
 * @remarks
 * Este tipo define los valores permitidos para la propiedad {@link PrincipioArquitectura.categoria},
 * estableciendo las áreas temáticas que agrupan los principios de diseño.
 *
 * @example
 * ```ts
 * const categoria: CategoriaPrincipio = 'Cohesion';
 * ```
 */
export type CategoriaPrincipio = 'Modularidad' | 'Cohesion' | 'Acoplamiento' | 'SeparacionResponsabilidades';
