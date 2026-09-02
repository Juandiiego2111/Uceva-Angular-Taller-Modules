/**
 * Representa un tema (clase o unidad) dentro del módulo de Arquitectura de Software.
 *
 * Cada tema agrupa un conjunto de puntos clave que resumen los
 * conceptos fundamentales trabajados durante la sesión correspondiente.
 *
 * @remarks
 * Esta interfaz se utiliza para tipar la información mostrada
 * en listados y vistas detalle del módulo, asegurando una
 * estructura consistente para todos los temas de la materia.
 *
 * @example
 * ```ts
 * const tema: Tema = {
 *   id: 1,
 *   titulo: 'Principios SOLID',
 *   puntosClave: [
 *     'Responsabilidad única',
 *     'Abierto/Cerrado',
 *     'Sustitución de Liskov'
 *   ]
 * };
 * ```
 */
export interface Tema {
    /**
     * Identificador único del tema.
     *
     * @remarks
     * Permite localizar, referenciar y listar el tema
     * dentro de la colección del módulo.
     */
    id: number;

    /**
     * Nombre del tema o de la clase asociada.
     *
     * @remarks
     * Se muestra como encabezado principal del tema en la UI
     * y sirve como identificador legible para el usuario.
     */
    titulo: string;

    /**
     * Lista de ideas principales del tema.
     *
     * @remarks
     * Contiene las conclusiones, definiciones o conceptos
     * más relevantes tratados en el tema对应的 clase.
     */
    puntosClave: string[];
}