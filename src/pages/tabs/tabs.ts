import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';
import { Tab6Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  tab6Root: any = Tab6Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";
  tab6Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
	  this.tab1Title = "Fetch";
      this.tab2Title = "Worker";
	  this.tab3Title = "Create";
	  this.tab4Title = "Customer";
	  this.tab5Title = "Maps";
      this.tab6Title = "Settings";
    });
  }
  
  showCustomerTab(){
	  console.log('In tab show');
	  if(localStorage.getItem('profile')=== "customer")
	  {
		  return true;
	  }
	  return false; 
  }
  
    showWorkerTab(){
	  console.log('In tab show');
	  if(localStorage.getItem('profile')=== "worker")
	  {
		  return true;
	  }
	  return false; 
  }
}
