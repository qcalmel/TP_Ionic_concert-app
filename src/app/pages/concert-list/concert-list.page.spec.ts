import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcertListPage } from './concert-list.page';

describe('ConcertListPage', () => {
  let component: ConcertListPage;
  let fixture: ComponentFixture<ConcertListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
