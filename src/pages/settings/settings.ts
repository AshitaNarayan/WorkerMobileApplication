import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
   
  workDetails = [{
	  customer_Name : "White Walker",
	  profile: "customer",
      job_Description: "Pick up laundry",
      pay_Out: "200",
      location: "Hitech City",
	  capability: "pickup",
	  customer_Rating: "3.0"
	},
	{
	  customer_Name : "Tyrion",
	  profile: "customer",
      job_Description: "Cooking for a party of 10 people",
      pay_Out: "5000",
      location: "Kukatpally",
	  capability: "cooking",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Gekko",
	  profile: "customer",
      job_Description: "Bake a cake for a birthday party",
      pay_Out: "2000",
      location: "Hitech City",
	  capability: "cooking",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Myrion",
	  profile: "customer",
      job_Description: "Lawn mowing",
      pay_Out: "500",
      location: "Hitech City",
	  capability: "lawnmowing",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Pyro",
	  profile: "customer",
      job_Description: "Pack up my clothes",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "pack",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Ludwin",
	  profile: "customer",
      job_Description: "Babysit for a 6 year old",
      pay_Out: "1000",
      location: "Ameerpet",
	  capability: "babysitting",
	  customer_Rating: "5.0"
	},
	{
	  customer_Name : "Ludwin",
	  profile: "customer",
      job_Description: "Pick up my grocery",
      pay_Out: "200",
      location: "Ameerpet",
	  capability: "pickup",
	  customer_Rating: "5.0"
	},
	{
	  customer_Name : "Meera",
	  profile: "customer",
      job_Description: "Paint my gate",
      pay_Out: "1500",
      location: "Hitech City",
	  capability: "paint",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Meera",
	  profile: "customer",
      job_Description: "Car pool",
      pay_Out: "1500",
      location: "Hitech City",
	  capability: "carpool",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Harry",
	  profile: "customer",
      job_Description: "Cook my dinner",
      pay_Out: "500",
      location: "Hitech City",
	  capability: "cooking",
	  customer_Rating: "4.5"
	},
	{
	  customer_Name : "Sejal",
	  profile: "customer",
      job_Description: "Babysit a 2 year old",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "babysitting",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Payal",
	  profile: "customer",
      job_Description: "Babysit a 7 year old",
      pay_Out: "800",
      location: "Ameerpet",
	  capability: "babysitting",
	  customer_Rating: "3.0"
	}
	]
	
	serverip = '';
	constructor(public navCtrl: NavController, public modalCtrl: ModalController,public http: Http) {
    //this.currentWorkerJobSearchResults = this.workerJobSearchResults.query();
	}

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

 
  bulkDataAdd()
  {
	
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workDetails);
	
 
	var serverURL = "http://"+this.serverip+"/createBulkData";
	this.http.post(serverURL, this.workDetails, options)
      .subscribe(data => {
		console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
  }
  
  clearAllData(){
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
	this.serverip = localStorage.getItem('serverip');
	
	console.log('Calling Reset service');
	
    let params = {};
	var serverURL = "http://"+this.serverip+"/resetDataService";
	this.http.post(serverURL, params, options)
      .subscribe(data => {
		console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
  }
}
