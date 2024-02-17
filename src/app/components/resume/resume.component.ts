import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent  implements OnInit {

  totalKilometros: number = 125; // Datos ficticios
  tiempoTotal: number = 360; // Datos ficticios (en minutos)

  constructor() { }

  ngOnInit() {}

}
