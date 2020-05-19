import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, AlertController  } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  userId: string;

  dataUser = {
    email: '',
    password: '',
  };

  profileUser = {
    userID: '',
    email: '',
    compagny: '',
    lastname: '',
    firstname: '',
    displayname: ''
  }

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password).then((res) => {
      this.dataUser = {
        email: '',
        password: ''
      };
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  signupUser() {
      this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
        .then(() => {
          this.router.navigate(['profile']);
        }, (error) => {
          this.loadingController.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });

          });
        });
    }

    createProfile() {
      const userId = this.afAuth.authState.subscribe(user => {
        this.userId = user.uid;
      });

      const userDoc = this.afSG.doc<any>('profiles/' + userId);
      userDoc.set({
        firstName: this.profileUser.firstname,
        lastName: this.profileUser.lastname,
        email: this.dataUser.email,
        societe: this.profileUser.compagny
      });
      console.log( userId );
    }

}
