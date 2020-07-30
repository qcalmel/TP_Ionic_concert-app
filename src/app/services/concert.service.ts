import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface ConcertInterface {
    id: number;
    group: string;
    place: string;
    rating: number;
    date: string;
}

const URL = 'http://localhost:3000/concerts/';

@Injectable({
    providedIn: 'root'
})
export class ConcertService {

    public concertList: ConcertInterface[] = [];

    public concertListChanged: Subject<ConcertInterface[]>;

    public addConcert(concert: ConcertInterface) {
        this.http.post(URL, concert)
            .subscribe((data: ConcertInterface) => {
                this.concertList.push(data);
                this.concertListChanged.next(this.concertList);
            });
    }

    public updateConcert(concert: ConcertInterface) {
        this.http.put(URL + concert.id, concert)
            .subscribe((data: ConcertInterface) => {
                this.concertListChanged.next(this.concertList);
            });
    }

    constructor(private http: HttpClient) {
        this.concertListChanged = new Subject<ConcertInterface[]>();
    }

    public loadConcerts() {
        this.http.get(URL)
            .subscribe(
                (data: ConcertInterface[]) => {
                    this.concertList = data;
                    this.concertListChanged.next(data);
                }
            );
    }

    public deleteConcert(concert: ConcertInterface) {
        this.http.delete(URL + concert.id).subscribe(() => this.loadConcerts());
    }

    public getConcertById(id) {
        // tslint:disable-next-line:triple-equals
        return this.concertList.find((item) => item.id == id);
    }
}
