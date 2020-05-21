
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference, DocumentChangeAction } from '@angular/fire/firestore';
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
  chantiersSnap: Observable<DocumentChangeAction<Chantier>[]>;
  filteredChantier: Observable<Chantier[]>;
  filteredChantiersId: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.chantiers = this.afSG.collection('chantiers').valueChanges();
    this.chantiersSnap = this.afSG.collection('chantiers').snapshotChanges();

  }

  getChantiers(){
    return this.chantiers;
  }

  readData() {
    return this.chantiersSnap;
  }

  getFilteredChantierId(name: string){
      const chantiersFilteredSnap = this.afSG.collection('chantiers').ref.where('nomchantier', '==', name);
      chantiersFilteredSnap.get().then((result) => {
        result.forEach(doc => {
        // console.log(doc.data());
        this.filteredChantiersId = doc.id;
        });
      });
      return this.filteredChantiersId;
  }

}
