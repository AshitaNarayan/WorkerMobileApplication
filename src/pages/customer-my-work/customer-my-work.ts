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
   
  json = [];
  
  workDetails = {
		  customer_Name : "",
		  profile: "",
		  job_Description: "",
		  pay_Out: "",
		  location: "",
		  capability: "",
		  customer_Rating: "4.5"
	}
	
   customerDetails = {
		customer_Name : "",
		customer_Rating : "4.5",
		profile: ""
   }
	serverip = '';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public http: Http) {
    //this.currentWorkerJobSearchResults = this.workerJobSearchResults.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.customerDetails.customer_Name = localStorage.getItem('username');
	this.customerDetails.profile = localStorage.getItem('profile');
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.customerDetails);
	  var serverURL = "http://"+this.serverip+"/customerGetWork";
	  this.http.post(serverURL, this.customerDetails, options)
      .map((data: any) => data.json()).subscribe((data: any) => {
		//console.log(data['_body']);
		this.json=data;
		console.log(this.json);
      }, error => {
        console.log(error);// Error getting the data
      }); 
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
    let options = new RequestOptions({ headers: headers });
 
 	this.workDetails.customer_Name = localStorage.getItem('username');
	this.workDetails.profile = localStorage.getItem('profile');
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workDetails);
	
	/*this.http.get('http://localhost:8080/customers').map(res => res.json()).subscribe(data => {
        console.log(data['_body']);
    });*/
	
	
	/*this.http.post("http://localhost:8080/customerAddWork", this.workDetails, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); */
	  
	
	 /* let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
	  
	  this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });*/
	  
	  var serverURL = "http://"+this.serverip+"/customerAddWork";
	  this.http.post(serverURL, this.workDetails, options)
      .map((data: any) => data.json()).subscribe((data: any) => {
		//console.log(data['_body']);
		this.json=data;
		console.log(this.json);
      }, error => {
        console.log(error);// Error getting the data
      }); 
  }
}
