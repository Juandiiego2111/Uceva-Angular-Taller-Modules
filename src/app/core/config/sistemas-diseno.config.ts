import { ContenidoSistemasDiseno } from '../../modules/sistemas-diseno/interfaces/sistema-diseno.interface';

/**
 * Contenido teórico sintetizado del módulo "Sistemas de Diseño".
 *
 * Esta constante centraliza toda la data estática que consume la página
 * principal del módulo a través de `SistemasDisenoService`. Se mantiene en
 * `core/config/` siguiendo el mismo patrón que `navbar.config.ts`: la
 * información vive separada de la vista y tipada con una interfaz.
 *
 * @remarks
 * El texto está redactado con palabras propias a partir de los conceptos
 * de sistemas de diseño y del diseño atómico de Brad Frost; no es una copia
 * literal de las diapositivas.
 *
 * @type {ContenidoSistemasDiseno}
 */
export const SISTEMAS_DISENO_CONTENIDO: ContenidoSistemasDiseno = {
  queEs: {
    id: 'que-es',
    titulo: '¿Qué es un sistema de diseño?',
    descripcion:
      'Es el conjunto de reglas, componentes y patrones reutilizables que ' +
      'definen cómo se ve y cómo se comporta un producto. Funciona como un ' +
      'lenguaje común entre diseño y desarrollo: en lugar de resolver cada ' +
      'pantalla desde cero, los equipos parten de piezas ya acordadas y ' +
      'documentadas.',
    puntos: [
      'Unifica criterios visuales y de interacción en todo el producto.',
      'Sirve de puente entre las personas de diseño y las de desarrollo.',
      'Se apoya en documentación viva, no en acuerdos informales.',
    ],
  },

  porQueUsarlo: {
    id: 'por-que-usarlo',
    titulo: '¿Por qué usar un sistema de diseño?',
    descripcion:
      'Un sistema de diseño ordena el trabajo de frontend y hace que el ' +
      'producto pueda crecer sin perder coherencia.',
    puntos: [
      'Reduce las inconsistencias entre pantallas y flujos.',
      'Hace más simple el mantenimiento del frontend.',
      'Facilita que varios equipos trabajen en paralelo sin pisarse.',
      'Acelera el desarrollo al reutilizar componentes probados.',
      'Permite escalar el producto con una base sólida.',
    ],
  },

  problemasSinSistema: {
    id: 'problemas-sin-sistema',
    titulo: 'Problemas de trabajar sin un sistema de diseño',
    descripcion:
      'Cuando no hay una base común, cada desarrollador y cada diseñador ' +
      'resuelve lo mismo a su manera. Con el tiempo aparecen estos síntomas:',
  },

  problemas: [
    {
      problema: 'Interfaces inconsistentes: botones, colores y espaciados distintos en cada vista.',
      solucionConSistema: 'Un set único de estilos y componentes que se reutiliza en todas las vistas.',
    },
    {
      problema: 'Componentes duplicados que hacen casi lo mismo con pequeñas diferencias.',
      solucionConSistema: 'Una sola librería de componentes con variantes parametrizadas.',
    },
    {
      problema: 'Deuda técnica visual que se acumula y es cara de corregir después.',
      solucionConSistema: 'Cambios centralizados: se ajusta el componente y se propaga a todo el producto.',
    },
    {
      problema: 'Dificultad para escalar cuando entran nuevas personas o nuevas pantallas.',
      solucionConSistema: 'Base documentada que sirve de punto de partida y de referencia.',
    },
    {
      problema: 'Retrabajo constante: se rehace lo que ya existía por no encontrarlo o no confiar en ello.',
      solucionConSistema: 'Catálogo claro de lo disponible, con ejemplos de uso.',
    },
  ],

  componentesClave: {
    id: 'componentes-clave',
    titulo: 'Componentes clave de un sistema de diseño',
    descripcion:
      'Un sistema de diseño no es solo una carpeta de componentes; combina ' +
      'decisiones de fondo con piezas concretas y su documentación.',
    puntos: [
      'Principios de diseño que guían las decisiones.',
      'Paleta de colores con usos definidos.',
      'Tipografía y jerarquía de textos.',
      'Escala de espaciados y de tamaños.',
      'Componentes de interfaz reutilizables.',
      'Patrones de interacción para casos repetidos.',
      'Documentación que explica cómo y cuándo usar cada elemento.',
    ],
  },

  sistemaAtomico: {
    id: 'sistema-atomico',
    titulo: 'Diseño atómico (Brad Frost)',
    descripcion:
      'El diseño atómico propone construir la interfaz por capas, de lo más ' +
      'simple a lo más complejo. Cada nivel se arma con piezas del nivel ' +
      'anterior, lo que hace que la interfaz sea más fácil de razonar y de ' +
      'mantener. Son cinco niveles.',
  },

  nivelesAtomicos: [
    {
      nombre: 'Átomos',
      icono: 'circle',
      descripcion:
        'Elementos básicos de la interfaz. Por sí solos casi no tienen ' +
        'función, pero definen el estilo base del sistema.',
      ejemplos: ['Input', 'Button', 'Badge', 'Label'],
    },
    {
      nombre: 'Moléculas',
      icono: 'diagram-2',
      descripcion:
        'Combinaciones pequeñas de átomos que juntos cumplen una función ' +
        'simple y concreta.',
      ejemplos: ['Input Group', 'Button Group', 'Breadcrumb', 'List Group'],
    },
    {
      nombre: 'Organismos',
      icono: 'diagram-3',
      descripcion:
        'Bloques más grandes formados por moléculas y átomos, con un ' +
        'contexto y una responsabilidad propios dentro de la pantalla.',
      ejemplos: ['Navbar', 'Card', 'Modal', 'Accordion', 'Tabs', 'Table', 'Carousel'],
    },
    {
      nombre: 'Plantillas',
      icono: 'layout-wtf',
      descripcion:
        'Estructura de la página: cómo se distribuyen los organismos en el ' +
        'layout, todavía sin contenido real.',
      ejemplos: [],
    },
    {
      nombre: 'Páginas',
      icono: 'file-earmark-text',
      descripcion:
        'La plantilla ya rellena con contenido real. Es lo que finalmente ' +
        've y usa la persona usuaria.',
      ejemplos: [],
    },
  ],
};
