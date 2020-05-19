import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Montecharge } from '../models/montecharge';

@Injectable({
  providedIn: 'root'
})
export class MontechargeService {

  montechargesCollectionRef: AngularFirestoreCollection<Montecharge>;
  montecharges: Observable<Montecharge[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.montecharges = this.afSG.collection('montecharges').valueChanges();
  }

  getMontecharges(){
    return this.montecharges;
  }

}
