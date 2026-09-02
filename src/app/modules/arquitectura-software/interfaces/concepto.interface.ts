/**
 * Representa un concepto dentro del módulo de Arquitectura de Software.
 *
 * Cada concepto describe un tema, principio o patrón fundamental
 * que forma parte del contenido académico y de referencia de la materia.
 *
 * @remarks
 * Esta interfaz se utiliza para tipar los elementos mostrados
 * en las vistas del módulo, permitiendo un renderizado homogéneo
 * y consistente de la información.
 *
 * @example
 * ```ts
 * const concepto: Concepto = {
 *   id: 1,
 *   titulo: 'SOLID',
 *   descripcion: 'Conjunto de cinco principios de diseño orientado a objetos.'
 * };
 * ```
 */
export interface Concepto {
    /**
     * Identificador único del concepto.
     *
     * @remarks
     * Se emplea para localizar, referenciar y listar el concepto
     * dentro de la colección del módulo.
     */
    id: number;

    /**
     * Título o nombre corto del concepto.
     *
     * @remarks
     * Se muestra como encabezado principal del elemento en la UI.
     */
    titulo: string;

    /**
     * Descripción detallada del concepto.
     *
     * @remarks
     * Contiene la explicación, definición o resumen del tema
     * que se presenta al usuario.
     */
    descripcion: string;
}