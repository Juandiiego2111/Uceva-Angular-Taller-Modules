import { Component, Input } from '@angular/core';
import { Tema } from '../../interfaces/tema.interface';

/**
 * Componente de presentación del módulo de Arquitectura de Software.
 *
 * Renderiza la lista de temas recibida desde la página padre,
 * mostrando el título de cada tema y sus puntos clave asociados.
 *
 * @remarks
 * Este componente es puramente presentacional: no realiza
 * peticiones ni inyecta servicios, limitándose a recibir los
 * datos a través de su propiedad de entrada.
 */
@Component({
  selector: 'app-content-arquitectura',
  standalone: false,
  templateUrl: './content-arquitectura.html',
  styleUrl: './content-arquitectura.scss',
})
export class ContentArquitectura {

  /**
   * Lista de temas a mostrar en la vista.
   *
   * @remarks
   * Es proporcionada por el componente padre
   * (`ArquitecturaSoftwarePage`) mediante property binding.
   * Se inicializa como un arreglo vacío para evitar errores
   * de renderizado antes de recibir los datos.
   */
  @Input() temas: Tema[] = [];

}