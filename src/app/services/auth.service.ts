import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential
} from '@angular/fire/auth';
// import { DataService } from './data.service';
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  signOut() {
    const auth = getAuth();
    auth.signOut().then(() => {
      // Sign-out successful.
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    })

  }


  constructor(private auth: Auth, private router : Router) { }

  login(email: string, password: string) {
    // Aquí puedes implementar la lógica para autenticar al usuario
    // Podrías hacer una llamada a un servicio externo o validar localmente
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        console.log('persistencia de sesion activada');
        signInWithEmailAndPassword(auth, email, password).then((userCredential: UserCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem('user', JSON.stringify(user));
          console.log('Usuario logueado con éxito', user);
          this.router.navigate(['tabs']);
          // ...
        })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }


  getCurrentUser(){
    const auth = getAuth();
    const user = auth.currentUser;
    return user
  }

  async register(email: string, password: string) {
    // Aquí podrías enviar los datos de registro a un servicio externo o guardarlos localmente
    // Por ahora, solo simularemos un registro exitoso

    // Aquí podrías implementar la lógica para registrar el tipo de cuenta en la base de datos
    // Por ejemplo, podrías tener una colección de usuarios donde cada usuario tenga un campo "type" para el tipo de cuenta
      const user =  createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      //console.log(`Registrando usuario: ${name}, ${email}, ${password}, ${accountType}`);
      // this.data.createUser(name, email, accountType, (await user).user.uid);
      return user;
  }




}



