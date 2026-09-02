import { Component, OnInit } from '@angular/core';
import { ArquitecturaSoftwareService } from '../../services/arquitectura-software.service';
import { Tema } from '../../interfaces/tema.interface';

/**
 * Página principal del módulo de Arquitectura de Software.
 *
 * Actúa como contenedor de la vista, encargándose de solicitar
 * la información de los temas al servicio y pasarla al componente
 * de presentación correspondiente.
 *
 * @remarks
 * Esta página no contiene lógica de UI: su responsabilidad es
 * alimentar al componente `ContentArquitectura` con los datos
 * obtenidos desde el Core a través del servicio.
 */
@Component({
  selector: 'app-arquitectura-software-page',
  standalone: false,
  templateUrl: './arquitectura-software-page.html',
  styleUrl: './arquitectura-software-page.scss',
})
export class ArquitecturaSoftwarePage implements OnInit {

  /**
   * Lista de temas a renderizar en la vista.
   *
   * @remarks
   * Se inicializa vacía y se llena en {@link ngOnInit} con el
   * resultado del servicio, para evitar renderizar contenido
   * antes de disponer de los datos.
   */
  public temas: Tema[] = [];

  /**
   * Constructor de la página.
   *
   * @param {ArquitecturaSoftwareService} arquitecturaSoftwareService
   * Servicio que provee la información de los temas del módulo.
   */
  constructor(private arquitecturaSoftwareService: ArquitecturaSoftwareService) {}

  /**
   * Hook de inicialización de Angular.
   *
   * @remarks
   * Carga los temas invocando al método síncrono del servicio
   * y los asigna a la propiedad {@link temas} para que estén
   * disponibles en la vista durante el primer render.
   */
  ngOnInit(): void {
    this.temas = this.arquitecturaSoftwareService.getTemas();
  }

}