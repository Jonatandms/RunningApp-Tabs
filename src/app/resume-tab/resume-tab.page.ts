import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-tab',
  templateUrl: 'resume-tab.page.html',
  styleUrls: ['resume-tab.page.scss']
})
export class ResumeTabPage {

  totalKilometros: number = 125; // Datos ficticios
  tiempoTotal: number = 360; // Datos ficticios (en minutos)

  constructor() {}

}
