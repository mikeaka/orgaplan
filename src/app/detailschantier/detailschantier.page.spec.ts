import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailschantierPage } from './detailschantier.page';

describe('DetailschantierPage', () => {
  let component: DetailschantierPage;
  let fixture: ComponentFixture<DetailschantierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailschantierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailschantierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
