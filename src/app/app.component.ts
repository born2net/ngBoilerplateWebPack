import {Component} from '@angular/core';
import * as _ from 'lodash';
import {AppStore} from "angular2-redux-util";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/finally";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/do";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works 3';
    constructor(private appStore: AppStore) {

        // console.log(jQuery('body'));
        // console.log(_.random(10,20));
        // alert(this.appStore);
    }


    public ratingStates:any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];

    public hoveringOver(value:number):void {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };

    public resetStar():void {
        this.overStar = void 0;
    }

    public x:number = 5;
    public y:number = 2;
    public max:number = 10;
    public rate:number = 7;
    public isReadonly:boolean = false;

    public overStar:number;
    public percent:number;
}



