import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"runningapp-4ecbd","appId":"1:137642867413:web:9fa2515792b186ad7a405c","storageBucket":"runningapp-4ecbd.appspot.com","apiKey":"AIzaSyApKPF4uL-XV8iSvQ27ByFRdbKXKqWtTEE","authDomain":"runningapp-4ecbd.firebaseapp.com","messagingSenderId":"137642867413","measurementId":"G-MY5CPE2L53"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule {}
