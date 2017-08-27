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
      job_Description: "Pick up laundry",
      pay_Out: "200",
      location: "Hitech City",
	  capability: "pickup",
	  customer_Rating: "3.0"
	},
	{
	  customer_Name : "Tyrion",
      job_Description: "Cooking for a party of 10 people",
      pay_Out: "5000",
      location: "Kukatpally",
	  capability: "cooking",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Gekko",
      job_Description: "Bake a cake for a birthday party",
      pay_Out: "2000",
      location: "Hitech City",
	  capability: "cooking",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Myrion",
      job_Description: "Lawn mowing",
      pay_Out: "500",
      location: "Hitech City",
	  capability: "lawnmowing",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Pyro",
      job_Description: "Pack up my clothes",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "pack",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Ludwin",
      job_Description: "Babysit for a 6 year old",
      pay_Out: "1000",
      location: "Ameerpet",
	  capability: "babysitting",
	  customer_Rating: "5.0"
	},
	{
	  customer_Name : "Ludwin",
      job_Description: "Pick up my grocery",
      pay_Out: "200",
      location: "Ameerpet",
	  capability: "pickup",
	  customer_Rating: "5.0"
	},
	{
	  customer_Name : "Meera",
      job_Description: "Paint my gate",
      pay_Out: "1500",
      location: "Hitech City",
	  capability: "paint",
	  customer_Rating: "4.0"
	},
	{
	  customer_Name : "Meera",
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
      job_Description: "Babysit a 2 year old",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "babysitting",
	  customer_Rating: "3.5"
	},
	{
	  customer_Name : "Payal",
	  worker_Name : "Jon Snow",
      job_Description: "Babysit a 7 year old",
      pay_Out: "800",
      location: "Ameerpet",
	  capability: "babysitting",
	  customer_Rating: "3.0",
	  worker_Rating: "3.5",
	  bid_Amount: 500,
	  status: "Interested"
	},
	{
	  customer_Name : "Rolond",
	  worker_Name : "Jon Snow",
      job_Description: "Cook for a party of 15",
      pay_Out: "800",
      location: "Ameerpet",
	  capability: "cooking",
	  customer_Rating: "3.5",
	  worker_Rating: "3.0",
	  bid_Amount: 300,
	  status: "Interested"
	},
	{
	  customer_Name : "Ludwin",
	  worker_Name : "Jon Snow",
      job_Description: "Pick up kid from school",
      pay_Out: "500",
      location: "Hitech City",
	  capability: "GeneralLabor",
	  customer_Rating: "4.0",
	  worker_Rating: "3.5",
	  bid_Amount: 400,
	  status: "Completed",
	  worker_Rated: 4.0,
	  customer_Rated: 4.5
	},
	{
	  customer_Name : "Cersei",
	  worker_Name : "Arya Stark",
      job_Description: "Make snacks for pool party",
      pay_Out: "1000",
      location: "Ameerpet",
	  capability: "cooking",
	  customer_Rating: "3.0",
	  worker_Rating: "4.5",
	  bid_Amount: 800,
	  status: "Interested"
	},
	{
	  customer_Name : "Lannister",
	  worker_Name : "Arya Stark",
      job_Description: "Bake wedding cake",
      pay_Out: "3000",
      location: "Hitech City",
	  capability: "cooking",
	  customer_Rating: "4.0",
	  worker_Rating: "4.5",
	  bid_Amount: 2500,
	  status: "Interested"
	},
	{
	  customer_Name : "Lannister",
	  worker_Name : "Arya Stark",
      job_Description: "Bake wedding cake of 10 kgs",
      pay_Out: "2000",
      location: "Hitech City",
	  capability: "cooking",
	  customer_Rating: "4.0",
	  worker_Rating: "4.5",
	  bid_Amount: 2300,
	  status: "Accepted"
	},
	{
	  customer_Name : "Danaerys",
	  worker_Name : "Sansa Stark",
      job_Description: "Pack my books",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "GeneralLabor",
	  customer_Rating: "4.5",
	  worker_Rating: "3.0",
	  bid_Amount: 1300,
	  status: "Accepted"
	},
	{
	  customer_Name : "Ludwin",
	  worker_Name : "Sansa Stark",
      job_Description: "Pick up kid from school",
      pay_Out: "1000",
      location: "Hitech City",
	  capability: "GeneralLabor",
	  customer_Rating: "4.0",
	  worker_Rating: "3.0",
	  bid_Amount: 900,
	  status: "Completed",
	  customer_Rated: 4.5
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
