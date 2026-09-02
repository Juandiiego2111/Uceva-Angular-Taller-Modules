import { Component, Input } from '@angular/core';
import { Tema } from '../../interfaces/tema.interface';

@Component({
  selector: 'app-content-arquitectura',
  standalone: false,
  templateUrl: './content-arquitectura.html',
  styleUrl: './content-arquitectura.scss',
})
export class ContentArquitectura {

  @Input() temas: Tema[] = [];

}