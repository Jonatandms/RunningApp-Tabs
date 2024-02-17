import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  user: User;

  constructor(private auth: Auth) { }

  ngOnInit() {
      this.user = this.auth.currentUser!;
      console.log(this.user);
    }
  }
