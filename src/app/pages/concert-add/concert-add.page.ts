import {Component, OnInit} from '@angular/core';
import {ConcertInterface, ConcertService} from '../../services/concert.service';
import * as moment from 'moment';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-concert-add',
    templateUrl: './concert-add.page.html',
    styleUrls: ['./concert-add.page.scss'],
})
export class ConcertAddPage implements OnInit {


    constructor(private concertService: ConcertService,
                private activeRoute: ActivatedRoute
    ) {
    }


    public concert: ConcertInterface = {
        group: null,
        id: null,
        place: null,
        rating: null,
        date: null,
    };

    public validate() {
        console.log(this.concert);
        this.concert.date = moment(this.concert.date).format('DD/MM/YYYY');
        if (this.concert.id == null) {
            this.concertService.addConcert(this.concert);
        } else {
            this.concertService.updateConcert(this.concert);
        }

        // this.router.navigateByUrl('/note-list')

    }

    ngOnInit() {
        const id = this.activeRoute.snapshot.paramMap.get('id');
        if (id) {
            this.concert = this.concertService.getConcertById(id);
        }
    }

}
