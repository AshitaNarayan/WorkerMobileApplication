import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';

import { WorkerJobViewPage } from '../worker-job-view/worker-job-view';

import { WorkerJobSearchResults } from '../../providers/providers';

import { WorkerJobSearchResult } from '../../models/workerJobSearchResult';

@Component({
  selector: 'page-worker-job-list',
  templateUrl: 'worker-job-list.html',
})
export class WorkerJobListPage {
   
   json = [];
  
   workerTitle = '';
  
   workerDetails = {
		worker_Name : "",
		profile: ""
   }
	serverip = '';
	constructor(public navCtrl: NavController, public modalCtrl: ModalController,public http: Http) {
    //this.currentWorkerJobSearchResults = this.workerJobSearchResults.query();
		this.workerTitle = localStorage.getItem('username');
	}

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidEnter() {
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerDetails.worker_Name = localStorage.getItem('username');
	this.workerDetails.profile = localStorage.getItem('profile');
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workerDetails);
	var serverURL = "http://"+this.serverip+"/workerGetJobsIntAndAccept";
	this.http.post(serverURL, this.workerDetails, options)
    .map((data: any) => data.json()).subscribe((data: any) => {
		//console.log(data['_body']);
		this.json=data;
		console.log(this.json);
    }, error => {
        console.log(error);// Error getting the data
    }); 
  }

  refreshList(){
	var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
 	this.workerDetails.worker_Name = localStorage.getItem('username');
	this.workerDetails.profile = localStorage.getItem('profile');
	this.serverip = localStorage.getItem('serverip');
	
	console.log(this.workerDetails);
	var serverURL = "http://"+this.serverip+"/workerGetJobsIntAndAccept";
	this.http.post(serverURL, this.workerDetails, options)
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
    this.navCtrl.push(WorkerJobViewPage, {
      workerJobSearchResult: workerJobSearchResult
    });
  }
  
  onInput(searchTerm: String) {
  }
  
}
