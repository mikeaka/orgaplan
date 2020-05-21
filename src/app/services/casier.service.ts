import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
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
  casierSnap: Observable<DocumentChangeAction<Casier>[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.casiers = this.afSG.collection('casiers').valueChanges();
    this.casierSnap = this.afSG.collection('casiers').snapshotChanges();
  }

  getCasiers(){
    return this.casiers;
  }

  getCasiersSnap(){
    return this.casierSnap;
  }

  getCollectionWithIDs(chantierid: any) {
    return this.afSG.collection<any>('casiers', ref =>
        ref.where(
          'chantierid', '==', chantierid
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Casier;
            const id = a.payload.doc.id;
            return { id, ...data };
        })));
  }

}
