import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { WorkerJobSearchResults } from '../../providers/providers';

import { WorkerJobSearchResult } from '../../models/workerJobSearchResult';

@Component({
  selector: 'page-customer-my-work',
  templateUrl: 'customer-my-work.html',
})
export class CustomerMyWorkPage {
  currentWorkerJobSearchResults: WorkerJobSearchResult[]

  constructor(public navCtrl: NavController, public workerJobSearchResults: WorkerJobSearchResults, public modalCtrl: ModalController,public http: Http) {
    this.currentWorkerJobSearchResults = this.workerJobSearchResults.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  
  /**
   * Navigate to the detail page for this item.
   */
  openItem(workerJobSearchResult: WorkerJobSearchResult) {
    this.navCtrl.push(ItemDetailPage, {
      workerJobSearchResult: workerJobSearchResult
    });
  }
  
  onInput(searchTerm: String) {
  }
  
  addWorkByCustomer()
  {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
	headers.append('Access-Control-Allow-Origin', 'http://localhost:8101');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let options = new RequestOptions({ headers: headers });
 
    /*let postParams = {
      'job-description': 'Running an errand',
      'pay-out': '200',
      'location': 'Ameerpet',
	  'capability': 'runninganerrand'
	  
    }*/
	let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    
	//http://jsonplaceholder.typicode.com/posts
    this.http.post("http://localhost:8888/WorkMobileApp/rest/customerAddWork", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  }
}
