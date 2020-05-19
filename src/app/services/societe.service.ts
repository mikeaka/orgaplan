import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Societe } from '../models/societe';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  societesCollectionRef: AngularFirestoreCollection<Societe>;
  societes: Observable<Societe[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.societes = this.afSG.collection('societes').valueChanges();
   }

   getSocietes(){
    return this.societes;
  }
}
