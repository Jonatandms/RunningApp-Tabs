import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router, public navCtrl : NavController) {}

  login() {
    this.authService.login(this.email, this.password)
    .then((userCredential) => {
      console.log('Inicio de sesión exitoso:', userCredential.user.uid);

      // Redirige al usuario después del inicio de sesión
      // this.router.navigateByUrl('tabs');

      this.router.navigateByUrl('/tabs');

    })

  }
}
