
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Chantier } from '../models/chantier';

@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  chantiersCollectionRef: AngularFirestoreCollection<Chantier>;
  chantiers: Observable<Chantier[]>;


  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.chantiers = this.afSG.collection('chantiers').valueChanges();

  }

  getChantiers(){
    return this.chantiers;
  }



}
