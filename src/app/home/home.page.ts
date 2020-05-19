import { Profile } from './../models/profile';
import { ProfilePage } from './../profile/profile.page';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { ChantierService } from '../services/chantier.service';
import { Chantier } from '../models/chantier';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userId: string;
  mail: string;
  method: any;

  connected: boolean;

  userProfiles: Profile[];
  chantiers: Chantier[];

  dataUser = {
    email: '',
    password: ''
  };


  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
    public router: Router,
    public toastController: ToastController,
    private chantierService: ChantierService,
    private userService: UserService
  ) {

    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }

    });

  }

  ngOnInit() {
    this.chantierService.getChantiers().subscribe(chantiers => {
      console.log(chantiers);
      this.chantiers = chantiers;
    });

    this.userService.getProfiles().subscribe(users => {
      console.log(users);
      this.userProfiles = users;
    });

  }

  ionViewWillLoad(){

  }


  logout() {
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }


}

