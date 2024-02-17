import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential
} from '@angular/fire/auth';
// import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private auth: Auth) { }

  login(email: string, password: string) {
    // Aquí puedes implementar la lógica para autenticar al usuario
    // Podrías hacer una llamada a un servicio externo o validar localmente

    const user = signInWithEmailAndPassword(this.auth, email, password)
    return user
  }


  // logout(): void {
  //   // Eliminamos el estado de autenticación del almacenamiento local al cerrar sesión
  //   localStorage.removeItem('loggedIn');
  // }

  // isLoggedIn(): boolean {
  //   // Comprobamos si el usuario está autenticado consultando el estado en el almacenamiento local
  //   return localStorage.getItem('loggedIn') === 'true';
  // }


  async register(name: string, email: string, password: string, accountType: string) {
    // Aquí podrías enviar los datos de registro a un servicio externo o guardarlos localmente
    // Por ahora, solo simularemos un registro exitoso

    // Aquí podrías implementar la lógica para registrar el tipo de cuenta en la base de datos
    // Por ejemplo, podrías tener una colección de usuarios donde cada usuario tenga un campo "type" para el tipo de cuenta
      const user =  createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      console.log(`Registrando usuario: ${name}, ${email}, ${password}, ${accountType}`);
      // this.data.createUser(name, email, accountType, (await user).user.uid);
      return user;
  }




}



