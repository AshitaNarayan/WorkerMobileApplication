import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';

import { User } from '../../providers/user';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  
  account: { username: string, password: string, profile: string , serverip:string} = {
    username : '',
    password : '',
	profile : '',
	serverip : '192.168.0.107:8080'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
	
	this.account.serverip = localStorage.getItem('serverip');
  }

  // Attempt to login in through our User service
  doLogin() {
	  localStorage.setItem('username', this.account.username);
	  localStorage.setItem('password', this.account.password);
	  localStorage.setItem('profile', this.account.profile);
	  localStorage.setItem('serverip', this.account.serverip);
	  this.navCtrl.push(MainPage);
	  
    //});
  }
}
