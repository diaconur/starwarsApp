import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = 'FilmsPage';
  tab2 = 'PeoplePage';
  tab3 = 'PlanetsPage';
  films : Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) { 
    this.films = this.http.get('http://swapi.co/api/planets');
    this.films
    .map(res => res.json())
    .subscribe(data => {
      console.log('my data: ', data);
    })

  }


}
