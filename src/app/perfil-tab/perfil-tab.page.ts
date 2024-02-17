import { Component } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'perfil-tab.page.html',
  styleUrls: ['perfil-tab.page.scss']
})
export class PerfilTabPage {

  user: User;

  constructor(private auth: Auth) {}
  ngOnInit() {
    this.user = this.auth.currentUser!;
    console.log(this.user);
  }

  // signOut() {
  //   this.AuthService.signOut();
  // }


}
