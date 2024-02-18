import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  formData = {
    nombre: '',
    apellidos: '',
    edad: '',
    objetivo: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private datafire : DataService, private router : Router) { }

  register() {
    // Llamamos al método de registro del servicio de autenticación
    this.authService.register(this.formData.email, this.formData.password)
    .then((userCredential) => {
      console.log('Registro de usuario exitoso:', userCredential.user.email);
      // Redirige al usuario después del inicio de sesión
      this.datafire.createUser(
        this.formData.nombre,
        this.formData.apellidos,
        this.formData.edad,
        this.formData.objetivo,
        this.formData.email,
        userCredential.user.uid).then(() => {
          this.router.navigateByUrl('tabs');
        })
    })
  }
}
