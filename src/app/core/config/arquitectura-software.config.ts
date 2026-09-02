import { Tema } from '../../modules/arquitectura-software/interfaces/tema.interface';

/**
 * Origen de datos del módulo de Arquitectura de Software.
 *
 * Esta constante centraliza la información de los temas y conceptos
 * fundamentales de la materia, siendo consumida por el servicio
 * correspondiente para alimentar las vistas del módulo.
 *
 * Cada elemento representa un tema (clase o unidad) con sus puntos
 * clave asociados, siguiendo la estructura definida por {@link Tema}.
 *
 * @type {Tema[]}
 *
 * @example
 * <app-arquitectura-software></app-arquitectura-software>
 */
export const ARQUITECTURA_SOFTWARE_CONFIG: Tema[] = [
    {
        id: 1,
        titulo: 'Fundamentos y Atributos de Calidad',
        puntosClave: [
            'La Arquitectura de Software es el conjunto de decisiones estructurales que definen cómo está organizado un sistema y cómo interactúan sus componentes',
            'No solo importa qué hace el sistema, sino cómo lo hace: puede cumplir su función pero ser inutilizable si es lento o inseguro',
            'Atributos de calidad principales: Rendimiento (tiempos de respuesta rápidos), Escalabilidad (soportar más usuarios o carga), Disponibilidad (tiempo funcional en línea), Mantenibilidad, Seguridad, Usabilidad e Interoperabilidad',
            'Propósito: reduce riesgos desde el inicio, facilita cambios futuros, agiliza el desarrollo y evita costos por deuda técnica'
        ]
    },
    {
        id: 2,
        titulo: 'La Arquitectura al Servicio del Negocio',
        puntosClave: [
            'Alineación Estratégica: la arquitectura es un medio para alcanzar los objetivos del negocio (crecer, reducir costos, lanzar rápido al mercado), no un fin en sí misma',
            'Business Drivers: necesidades puntuales del negocio que impulsan las decisiones técnicas, como rapidez de entrega, costos de infraestructura y experiencia del usuario',
            'Una mala alineación genera lentitud en los lanzamientos, altos costos de mantenimiento y pérdida de clientes por fallos',
            'Los modelos de negocio determinan el diseño técnico: por ejemplo, productos SaaS requieren alta disponibilidad y escalabilidad en la nube, mientras el software tradicional debe ser fácil de instalar'
        ]
    },
    {
        id: 3,
        titulo: 'El Rol del Arquitecto y el Proceso de Decisión',
        puntosClave: [
            'El arquitecto es el puente entre las necesidades del negocio, la tecnología y el equipo de desarrollo: guía técnicamente, evalúa riesgos y toma decisiones estructurales',
            'La toma de decisiones combina habilidades técnicas con visión estratégica y negociación, evaluando alternativas como Monolito vs Microservicios según el contexto',
            'Pasos del proceso arquitectónico: identificar el problema, generar alternativas técnicas, evaluar sus consecuencias, documentar y justificar la decisión, validar con prototipos o pruebas, y ajustar según la retroalimentación'
        ]
    },
    {
        id: 4,
        titulo: 'Idea Clave',
        puntosClave: [
            'La arquitectura de software da la estructura técnica a un sistema para garantizar su estabilidad y calidad',
            'Siempre se alinea a las metas del negocio y guía al equipo mediante decisiones evaluadas y justificadas'
        ]
    }
];