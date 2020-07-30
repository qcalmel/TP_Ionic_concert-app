import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConcertAddPageRoutingModule } from './concert-add-routing.module';

import { ConcertAddPage } from './concert-add.page';
import {RatingComponent} from '../../components/rating/rating.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConcertAddPageRoutingModule
    ],
    exports: [
        RatingComponent
    ],
    declarations: [ConcertAddPage, RatingComponent]
})
export class ConcertAddPageModule {}
