import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GruePage } from './grue.page';

describe('GruePage', () => {
  let component: GruePage;
  let fixture: ComponentFixture<GruePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GruePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
