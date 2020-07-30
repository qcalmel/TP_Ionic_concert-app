import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ConcertListPageRoutingModule} from './concert-list-routing.module';

import {ConcertListPage} from './concert-list.page';
import {RatingComponent} from '../../components/rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConcertListPageRoutingModule
    ],
    declarations: [ConcertListPage, RatingComponent]
})
export class ConcertListPageModule {
}
