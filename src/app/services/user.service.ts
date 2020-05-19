
import { Profile } from './../models/profile';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profilesCollectionRef: AngularFirestoreCollection<Profile>;
  profiles: Observable<Profile[]>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    ) {

      this.profiles = this.afSG.collection('profiles').valueChanges();

    }

    getProfiles(){
      return this.profiles;
    }


}
