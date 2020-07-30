import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcertAddPage } from './concert-add.page';

describe('ConcertAddPage', () => {
  let component: ConcertAddPage;
  let fixture: ComponentFixture<ConcertAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcertAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
