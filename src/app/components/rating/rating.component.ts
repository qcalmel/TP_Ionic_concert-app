import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

    @Input() max = 10;
    @Input() activeColor = 'success';
    @Input() inactiveColor = 'medium';
    @Input() disabledClick = false;

    public values: number[] = [];

    @Input() starValue;

    @Output() starValueChange: EventEmitter<number>;

    constructor() {
        this.starValueChange = new EventEmitter<number>();
    }

    ngOnInit() {
        for (let i = 1; i <= this.max; i++) {
            this.values.push(i);
        }
    }

    setStarValue(n) {
        if (!this.disabledClick) {
            this.starValue = n;
            this.starValueChange.emit(n);
        }
    }

}
