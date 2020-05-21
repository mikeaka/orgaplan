
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { CasierService } from '../services/casier.service';
import { GrueService } from '../services/grue.service';
import { MontechargeService } from '../services/montecharge.service';
import { ChantierService } from '../services/chantier.service';
import { Casier } from '../models/casier';
import { Grue } from '../models/grue';
import { Montecharge } from '../models/montecharge';
import { Chantier } from '../models/chantier';

import { Router } from '@angular/router';


@Component({
  selector: 'app-detailschantier',
  templateUrl: './detailschantier.page.html',
  styleUrls: ['./detailschantier.page.scss'],
})
export class DetailschantierPage implements OnInit {

  userId: string;
  mail: string;
  method: any;
  connected: boolean;
  Id: string;

  casiers: Casier[];
  grues: Grue[];
  montecharges: Montecharge[];
  chantiers: Chantier[];

  filteredChantierDatasId: string;
  filteredGrues: Grue[];

  // filteredGrue3: Grue[];
  // filteredGrues2$: Observable<Grue[]>;
  // filteredGrueID: string;
  // filteredChantierDatas: AngularFirestoreCollection<Chantier>;
  // filteredChantierDatasObs: Observable<Chantier[]>;

  grueFilteredSnap: Observable<DocumentChangeAction<Grue>[]>;

  chantiersCollectionRef: AngularFirestoreCollection<Chantier>;
  chantierObs: Observable<Chantier[]>;

  gruesCollectionRef: AngularFirestoreCollection<Grue>;
  grueObs$: Observable<Grue[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private afSG: AngularFirestore,
    private afDB: AngularFireDatabase,
    private casierService: CasierService,
    private grueService: GrueService,
    private montechargeService: MontechargeService,
    private chantierService: ChantierService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        // console.log('non connecté');
        this.connected = false;
      } else {
        // console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }

    });

  }

  ngOnInit() {

    this.chantierService.getChantiers().subscribe(chantiers => {
      // console.log(chantiers);
      this.chantiers = this.chantiers;
    });

    // get information about chantier coming from home page when user click on ion-card
    // const dataAll = this.ActivatedRoute.snapshot.paramMap;
    // console.log(dataAll);
    const dataAllName = this.ActivatedRoute.snapshot.paramMap.get('name');
    // console.log(dataAllName);

    this.filteredChantierDatasId = this.chantierService.getFilteredChantierId(dataAllName);
    // console.log(this.filteredChantierDatasId);

    //////////
    // this.grueService.getfilteredGrues(dataAllName);

    // this.afSG.collection<Grue>('grue', ref => ref.where('chantierid', '==', 'Vc5oPnLDAW6iBRiZJJjy')).valueChanges()
    // .subscribe(filteredGrues => {
      // console.log(filteredGrues);
      // this.filteredGrues = this.filteredGrues;

    // });
    if (this.filteredChantierDatasId) {
      console.log(this.filteredChantierDatasId);
      this.grueService.getCollectionWithIDs(this.filteredChantierDatasId).subscribe(actions => {
        this.filteredGrues = actions;
      });

      this.montechargeService.getCollectionWithIDs(this.filteredChantierDatasId).subscribe(actions => {
        this.montecharges = actions;
      });

      this.casierService.getCollectionWithIDs(this.filteredChantierDatasId).subscribe(actions => {
        this.casiers = actions;
      });

    }
    //////////////////
  }

  goToPagemontechargeCalendar(){
    this.router.navigate(['montrecharge']);
  }

  goToPageGrueCalendar(){
    this.router.navigate(['grue']);
  }

  goToPageCasierCalendar(){
    this.router.navigate(['casier']);
  }


}
