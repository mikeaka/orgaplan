import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontechargePage } from './montecharge.page';

describe('MontechargePage', () => {
  let component: MontechargePage;
  let fixture: ComponentFixture<MontechargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontechargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontechargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
