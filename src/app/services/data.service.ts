import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDocs, query, setDoc } from '@angular/fire/firestore';
import { FieldPath, where, documentId, getFirestore, getDoc } from 'firebase/firestore';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }


  async createUser(nombre :string,
    apellidos: string,
    edad: string,
    objetivo: string,
    email: string,
    uid:string) {
    try {
      const userDocRef = doc(this.firestore, `users/${uid}`);
      await setDoc(userDocRef,{
        'user_data': {nombre,apellidos,edad,objetivo,email}
      });

      console.log('User data added successfully');

    } catch (error) {
      console.error('Error adding user data:', error);
    }
  }


  async addRutina(rutina: any, uid: string) {
    try {
      const rutinaDocRef = doc(this.firestore, `rutinas/${uid}`)

      await setDoc(rutinaDocRef,{
        rutina
      });

      console.log('User data added successfully');
    } catch (error) {
      console.error('Error adding user data:', error);
    }
  }

  async getUsuarios() {
    return (
     await getDocs(query(collection(this.firestore, 'users'),where("user_data.accountType","==","user")))
    ).docs.map((users) => users.data());
   }

   async getUsuario(uid: string) {
    console.log(uid)
    const docRef = doc(this.firestore, "users", uid);
    try {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
          // console.log(docSnap.data());
          return docSnap.data();
      } else {
          console.log("Document does not exist")
          return '';
      }
    }catch(error) {
      console.log(error)
      return '';
    }
  }

   async getRutinas() {


    return (
     await getDocs(query(collection(this.firestore, 'users')))
    ).docs.map((users) => users.data());
   }

   async getRutinasUser(user: string) {
    return (
     await getDocs(query(collection(this.firestore, 'users'),where("rutinas.user","==",user)))
    ).docs.map((users) => users.data());
   }

   async getTypeUsuario(email: unknown) {
    return (
     await getDocs(query(collection(this.firestore, 'users'),where("user_data.email","==",email)))
    ).docs.map((users) => users.data());
   }

}
