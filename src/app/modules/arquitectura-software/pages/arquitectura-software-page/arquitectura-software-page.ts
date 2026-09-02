import { Component, OnInit } from '@angular/core';
import { ArquitecturaSoftwareService } from '../../services/arquitectura-software.service';
import { Tema } from '../../interfaces/tema.interface';

@Component({
  selector: 'app-arquitectura-software-page',
  standalone: false,
  templateUrl: './arquitectura-software-page.html',
  styleUrl: './arquitectura-software-page.scss',
})
export class ArquitecturaSoftwarePage implements OnInit {

  public temas: Tema[] = [];

  constructor(private arquitecturaSoftwareService: ArquitecturaSoftwareService) {}

  ngOnInit(): void {
    this.temas = this.arquitecturaSoftwareService.getTemas();
  }

}