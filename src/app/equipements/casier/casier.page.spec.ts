import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasierPage } from './casier.page';

describe('CasierPage', () => {
  let component: CasierPage;
  let fixture: ComponentFixture<CasierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
