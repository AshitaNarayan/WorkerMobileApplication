import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

import { CustomerJobListPage } from '../customer-job-list/customer-job-list';


@Component({
  selector: 'page-customer-job-view',
  templateUrl: 'customer-job-view.html'
})
export class CustomerJobViewPage {
  workerJobDetail: any;
  serverip;

  constructor(public navCtrl: NavController, navParams: NavParams, public http: Http) {
    this.workerJobDetail = navParams.get('workerJobSearchResult');
  }
  
  ionViewDidEnter() {
	  console.log(this.workerJobDetail);
  }
  customerAcceptJob()
  {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerJobDetail.customer_Name = localStorage.getItem('username');
	this.workerJobDetail.profile = localStorage.getItem('profile');
	this.workerJobDetail.customer_Rating = "4.5";
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workerJobDetail);
	
	var serverURL = "http://"+this.serverip+"/customerAcceptsJob";
	
	this.http.post(serverURL, this.workerJobDetail, options)
      .subscribe((data: any) => {
		console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
	this.navCtrl.push(CustomerJobListPage, {
    });
  }
  
  customerRateJob()
  {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerJobDetail.customer_Name = localStorage.getItem('username');
	this.workerJobDetail.profile = localStorage.getItem('profile');
	this.workerJobDetail.customer_Rating = "4.5";
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workerJobDetail);
	
	var serverURL = "http://"+this.serverip+"/customerRateWorker";
	
	this.http.post(serverURL, this.workerJobDetail, options)
      .subscribe((data: any) => {
		console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
	this.navCtrl.push(CustomerJobListPage, {
    });
  }

}
