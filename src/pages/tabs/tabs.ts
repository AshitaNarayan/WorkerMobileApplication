import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

import { CustomerMyWorkPage } from '../customer-my-work/customer-my-work';
import { ListMasterPage } from '../list-master/list-master';
import { WorkerJobListPage } from '../worker-job-list/worker-job-list';
import { CustomerJobListPage } from '../customer-job-list/customer-job-list';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
 

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";


  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
	  this.tab1Title = "Work";
      this.tab2Title = "My Jobs";
	  this.tab3Title = "Maps";
	  this.tab4Title = "Settings";
	
    });	
	if(localStorage.getItem('profile')=== "customer")
	{
		  this.tab1Root = CustomerMyWorkPage;
		  this.tab2Root = CustomerJobListPage;
	}
	else if(localStorage.getItem('profile')=== "worker"){
		  this.tab1Root = ListMasterPage;
		  this.tab2Root = WorkerJobListPage;
	}
  }
  
}
