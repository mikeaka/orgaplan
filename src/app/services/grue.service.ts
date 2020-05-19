import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { Grue } from '../models/grue';

@Injectable({
  providedIn: 'root'
})
export class GrueService {

  gruesCollectionRef: AngularFirestoreCollection<Grue>;
  grues: Observable<Grue[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
  ) {

    this.grues = this.afSG.collection('grues').valueChanges();

  }

  getGrues(){
    return this.grues;
  }

}
