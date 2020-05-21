import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Grue } from '../models/grue';

@Injectable({
  providedIn: 'root'
})
export class GrueService {

  // filteredGruesSnap: any;
  // filteredGrues2: any;

  gruesCollectionRef: AngularFirestoreCollection<Grue>;
  filteredGruesCollectionRef: AngularFirestoreCollection<Grue>;
  grues: Observable<Grue[]>;

  filteredGrues: Observable<Grue[]>;

  gruesSnap: Observable<DocumentChangeAction<Grue>[]>;


  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.grues = this.afSG.collection('grue').valueChanges();
    this.gruesSnap = this.afSG.collection('grue').snapshotChanges();

  }

  getGrues(){
    return this.grues;
  }

  getgrueSnap() {
    return this.gruesSnap;
  }

  getCollectionWithIDs(chantierid: any) {
    return this.afSG.collection<any>('grue', ref =>
        ref.where(
          'chantierid', '==', chantierid
        )).snapshotChanges().pipe(
            map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Grue;
            const id = a.payload.doc.id;
            return { id, ...data };
        })));
  }

  // readData(): Observable<Grue[]> {
  //  return this.filteredGrues;
  // }


  // getFilteredDataTest(){
  // console.log(chantierId);
  //   this.filteredGruesCollectionRef = this.afSG.collection('grue', ref => ref.where('chantierid', '==', 'Vc5oPnLDAW6iBRiZJJjy'));
  //   this.filteredGrues = this.filteredGruesCollectionRef.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Grue;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }


}
