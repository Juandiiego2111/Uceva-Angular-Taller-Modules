import { Injectable } from '@angular/core';
import { ARQUITECTURA_SOFTWARE_CONFIG } from '../../../core/config/arquitectura-software.config';
import { Tema } from '../interfaces/tema.interface';

/**
 * Servicio del módulo de Arquitectura de Software.
 *
 * Centraliza el acceso a la información de los temas del módulo,
 * evitando que los componentes dependan directamente del archivo
 * de configuración del Core.
 *
 * @remarks
 * Este servicio opera de forma síncrona, retornando los datos
 * definidos en {@link ARQUITECTURA_SOFTWARE_CONFIG} sin realizar
 * peticiones HTTP ni emitir Observables.
 */
@Injectable({
    providedIn: 'root'
})
export class ArquitecturaSoftwareService {
    /**
     * Lista de temas del módulo de Arquitectura de Software.
     *
     * @remarks
     * Se inicializa a partir de la configuración centralizada
     * {@link ARQUITECTURA_SOFTWARE_CONFIG}, sirviendo como fuente
     * única de datos para los consumidores del servicio.
     */
    private temas: Tema[] = ARQUITECTURA_SOFTWARE_CONFIG;

    /**
     * Obtiene la lista completa de temas del módulo.
     *
     * @remarks
     * Retorna una referencia directa al arreglo interno. Si en el
     * futuro se requiere inmutabilidad, conviene devolver una copia
     * para evitar mutaciones externas.
     *
     * @returns {Tema[]} Arreglo con los temas y sus puntos clave
     *                   definidos en la configuración del Core.
     */
    getTemas(): Tema[] {
        return this.temas;
    }
}