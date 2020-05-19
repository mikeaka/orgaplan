import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Casier } from '../models/casier';

@Injectable({
  providedIn: 'root'
})
export class CasierService {

  casiersCollectionRef: AngularFirestoreCollection<Casier>;
  casiers: Observable<Casier[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.casiers = this.afSG.collection('casiers').valueChanges();

  }

  getCasiers(){
    return this.casiers;
  }

}
