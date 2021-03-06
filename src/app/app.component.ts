/**
 * Sean Levy readme:
 * this is an ongoing project which uses ng-cli@webpack
 * to continue and test it while ng-cli is in beta
 * and eventually will migrate this project with studioDashboard
 *
 * updated: 9-17-2016
 *
 **/

import {Component} from '@angular/core';
import * as _ from 'lodash';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import * as platform from "platform";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works...!';
    constructor(private appStore: AppStore) {
        console.log(platform.name.toLowerCase())
        console.log(jQuery('body').height());
        console.log(_.random(10,20));
        console.log(this.appStore);
        alert(8);
    }


    public ratingStates:any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];


    private onClick(event){
        console.log(event);
        console.log(this.appStore);
    }

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



