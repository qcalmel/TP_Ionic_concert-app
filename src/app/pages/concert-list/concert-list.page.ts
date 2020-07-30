import {Component, OnInit} from '@angular/core';
import {ConcertInterface, ConcertService} from '../../services/concert.service';

@Component({
    selector: 'app-concert-list',
    templateUrl: './concert-list.page.html',
    styleUrls: ['./concert-list.page.scss'],
})
export class ConcertListPage implements OnInit {

    public concertList: ConcertInterface[] = [];

    public image = 'url("../../../assets/img/rammstein_concert_bercy_2009.png")';

    constructor(private concertService: ConcertService) {
    }

    public delete(concert: ConcertInterface) {
        this.concertService.deleteConcert(concert);
    }

    ngOnInit() {

        this.concertService.loadConcerts();
        this.concertService.concertListChanged.subscribe((data) => this.concertList = data);
    }

}
