import { PrincipioArquitectura } from "../../modules/principios-arquitectura/interfaces/principios.interface";

/**
 * Catálogo de principios de arquitectura de software.
 *
 * @remarks
 * Esta constante centraliza los principios que guían el diseño modular y la
 * organización del código fuente en la aplicación. Cada entrada describe un
 * principio (modularidad, cohesión, acoplamiento, separación de responsabilidades),
 * su nivel deseado, beneficios y ejemplos ilustrativos.
 *
 * Se utiliza principalmente como fuente de datos para componentes de tipo catálogo
 * o pantalla de referencia arquitectónica.
 *
 * @type {PrincipioArquitectura[]}
 *
 * @example
 * ```ts
 * import { PRINCIPIOS } from '@app/core/config/principios.config';
 *
 * const principios = PRINCIPIOS;
 * console.log(principios[0].nombre); // 'Modularidad'
 * ```
 */
export const PRINCIPIOS: PrincipioArquitectura[] = [
  {
    id: 1,
    nombre: 'Modularidad',
    categoria: 'Modularidad',
    nivelDeseado: 'Alto',
    descripcion: 'Divide el sistema en módulos con una función específica, que se pueden desarrollar y modificar por separado.',
    beneficios: [
      'Facilita el trabajo en equipo',
      'Reduce la complejidad del sistema',
      'Permite reemplazar un módulo sin afectar los demás'
    ],
    ejemploCorrecto: 'Una tienda online dividida en módulos independientes: Carrito, Inventario, Usuarios y Pagos.',
    ejemploIncorrecto: 'Todo el código de la tienda en un solo archivo gigante.'
  },
  {
    id: 2,
    nombre: 'Cohesión',
    categoria: 'Cohesion',
    nivelDeseado: 'Alto',
    descripcion: 'Qué tan enfocadas están las tareas dentro de un mismo módulo; a mayor cohesión, más clara y única es su responsabilidad.',
    beneficios: [
      'Facilita entender el código',
      'Simplifica el mantenimiento',
      'Cada módulo tiene un propósito único'
    ],
    ejemploCorrecto: 'Un módulo de Productos que solo crea, actualiza, busca y elimina productos.',
    ejemploIncorrecto: 'Un módulo de Productos que además envía correos y procesa pagos.'
  },
  {
    id: 3,
    nombre: 'Acoplamiento',
    categoria: 'Acoplamiento',
    nivelDeseado: 'Bajo',
    descripcion: 'Mide qué tanto depende un módulo de otro; a menor acoplamiento, más independientes son entre sí.',
    beneficios: [
      'Se puede modificar un módulo sin afectar a otros',
      'Aumenta la flexibilidad del sistema',
      'Facilita que el sistema evolucione'
    ],
    ejemploCorrecto: 'El módulo Calculadora solo devuelve un resultado; el módulo Pantalla decide cómo mostrarlo.',
    ejemploIncorrecto: 'La Calculadora llama directamente a la función que muestra el resultado en pantalla, así que cualquier cambio visual obliga a tocar la lógica de cálculo.'
  },
  {
    id: 4,
    nombre: 'Separación de Responsabilidades',
    categoria: 'SeparacionResponsabilidades',
    nivelDeseado: 'Alto',
    descripcion: 'Divide el sistema según el tipo de tarea (presentación, lógica de negocio, acceso a datos) sin mezclarlas en un mismo lugar.',
    beneficios: [
      'Reduce errores al aislar los cambios',
      'Facilita organizar el sistema en capas',
      'Mejora la legibilidad y la escalabilidad'
    ],
    ejemploCorrecto: 'Interfaz, reglas de negocio y acceso a base de datos en capas separadas; el botón \'Comprar\' solo llama una función.',
    ejemploIncorrecto: 'Un archivo HTML que también contiene consultas SQL y reglas como \'si no tiene saldo no puede comprar\'.'
  }
];
