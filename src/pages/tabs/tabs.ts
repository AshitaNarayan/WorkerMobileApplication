import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      //this.tab1Title = values['TAB1_TITLE'];
	  this.tab1Title = "Fetch";
      this.tab2Title = "Create";
      this.tab3Title = values['TAB3_TITLE'];
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
