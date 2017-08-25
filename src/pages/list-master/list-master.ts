import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { WorkerJobSearchResults } from '../../providers/providers';

import { WorkerJobSearchResult } from '../../models/workerJobSearchResult';

import { Http, Headers, RequestOptions } from '@angular/http';

// Import ionic2-rating module
import { NxtLifeIonic2RatingModule } from 'nxtlife-ionic2-rating';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  json = [];
  
  currentWorkerJobSearchResults = [];
  workerDetails = {
	  worker_Name : "",
	  profile: "",
      location_Range: "1",
      pay_In_Range: "1",
      worker_Location: "",
	  worker_Skill: ""
  }

   constructor(public navCtrl: NavController, public modalCtrl: ModalController,public http: Http) {
  }
  

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  /*addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }*/

  /**
   * Delete an item from the list of items.
   */
  /*deleteItem(item) {
    this.items.delete(item);
  }*/

  /**
   * Navigate to the detail page for this item.
   */
  /*openItem(workerJobSearchResult: WorkerJobSearchResult) {
    this.navCtrl.push(ItemDetailPage, {
      workerJobSearchResult: workerJobSearchResult
    });
  }*/
  
  onInput(searchTerm: String) {
  }
  
  getWorkByCustomer()
  {
	
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerDetails.worker_Name = localStorage.getItem('username');
	this.workerDetails.profile = localStorage.getItem('profile');
	
	console.log(this.workerDetails);
	
	/*this.http.get('http://localhost:8080/customers').map(res => res.json()).subscribe(data => {
        console.log(data['_body']);
    });*/
	
	/*var json = [];
	this.http.post("http://localhost:8080/workerGetMatchJobs", this.workerDetails, options)
      .subscribe(data => {
        console.log(data['_body']);
		json = data;
		console.log(json);
      }, error => {
        console.log(error);// Error getting the data
      }); */
	  
	  
	this.http.post("http://localhost:8080/workerGetMatchJobs", this.workerDetails, options)
      .map((data: any) => data.json()).subscribe((data: any) => {
		//console.log(data['_body']);
		this.json=data;
		console.log(this.json);
      }, error => {
        console.log(error);// Error getting the data
      }); 
  }
}
