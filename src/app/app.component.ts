import {Component} from '@angular/core';
import * as _ from 'lodash';
import {AppStore} from "angular2-redux-util";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    constructor(private appStore: AppStore) {
        console.log(jQuery('body'));
        // console.log(_.random(10,20));
        alert(this.appStore);
    }
}
