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
  
  workDetails = {
	  customer_Name : "Jon Snow",
      job_Description: "",
      pay_Out: "",
      location: "",
	  capability: "",
	  customer_Rating: "4.5"
	}

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
	console.log(this.workDetails);
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	  
	/*this.http.get('http://localhost:8080/customers').map(res => res.json()).subscribe(data => {
        console.log(data['_body']);
    });*/
	
	
	/*let workDetails = {
      job_description: "Running an errand",
      pay_out: "200",
      location: "Ameerpet",
	  capability: "runninganerrand"
	}*/
	
	this.http.post("http://localhost:8080/customerAddWork", this.workDetails, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
  }
}
