import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

import { WorkerJobListPage } from '../worker-job-list/worker-job-list';


@Component({
  selector: 'page-worker-job-detail',
  templateUrl: 'worker-job-detail.html'
})
export class WorkerJobDetailPage {
  workerJobDetail: any;
  serverip;

  constructor(public navCtrl: NavController, navParams: NavParams, public http: Http) {
    this.workerJobDetail = navParams.get('workerJobSearchResult');
  }
  
  workerInterestInJob()
  {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerJobDetail.worker_Name = localStorage.getItem('username');
	this.workerJobDetail.profile = localStorage.getItem('profile');
	this.workerJobDetail.worker_Rating = "4.0";
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workerJobDetail);
	
	var serverURL = "http://"+this.serverip+"/workerAddInterestInJob";
	
	this.http.post(serverURL, this.workerJobDetail, options)
      .subscribe((data: any) => {
		console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      }); 
	this.navCtrl.push(WorkerJobListPage, {
    });
  }

}
