import { Component } from '@angular/core';
import { Auth, User, authState, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'perfil-tab.page.html',
  styleUrls: ['perfil-tab.page.scss']
})
export class PerfilTabPage {

  userData: any;

  constructor(private auth: Auth, private authS : AuthService, private dataS : DataService) {
    this.getprofile();
  }

  async getprofile() {
    await this.dataS.getUsuario(this.auth.currentUser.uid).then(data => {
      this.userData = data;
    })
  }

  signOut() {
    this.authS.signOut();
  }


}
