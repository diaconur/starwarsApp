import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  peoples : Observable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider:ApiProvider) { 
    this.peoples = this.apiProvider.getPeople();
  }

  openDetails(people){
    this.navCtrl.push('PeopleDetailsPage', {people:people});
  }
}
