import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Profile = {} as Profile;

  constructor(
    private afDB: AngularFireDatabase,
    private afSG: AngularFirestore,
    private afAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit() {
  }



  createProfile2() {
    this.afAuth.authState.pipe((take(1))).subscribe(auth => {
      this.afSG.collection('profile/' + auth.uid).add(this.Profile)
      .then(() => this.router.navigate(['home']));
      this.afSG.doc<any>('profiles/' + auth.uid).set(this.Profile)
    });
  }

  createProfile3() {
    this.afAuth.authState.pipe((take(1))).subscribe(auth => {
      this.afSG.doc<any>('profiles/' + auth.uid).set(this.Profile)
      .then(() => this.router.navigate(['home']));
    });
  }

}
