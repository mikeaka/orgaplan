import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
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
  monteChargeSnap: Observable<DocumentChangeAction<Montecharge>[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.montecharges = this.afSG.collection('montecharges').valueChanges();
    this.monteChargeSnap = this.afSG.collection('montecharges').snapshotChanges();
  }

  getMontecharges(){
    return this.montecharges;
  }

  getMontechargesSnap(){
    return this.monteChargeSnap;
  }


  getCollectionWithIDs(chantierid: any) {
    return this.afSG.collection<any>('montecharge', ref =>
        ref.where(
          'chantierid', '==', chantierid
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Montecharge;
            const id = a.payload.doc.id;
            return { id, ...data };
        })));
  }

}
