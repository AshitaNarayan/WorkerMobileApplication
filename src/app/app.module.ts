import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { WorkerJobDetailPage } from '../pages/workerJobDetail/worker-job-detail'; 
import { WorkerJobListPage } from '../pages/worker-job-list/worker-job-list';
import { CustomerJobListPage } from '../pages/customer-job-list/customer-job-list';
import { WorkerJobViewPage } from '../pages/worker-job-view/worker-job-view';
import { CustomerJobViewPage } from '../pages/customer-job-view/customer-job-view';

import { CustomerMyWorkPage } from '../pages/customer-my-work/customer-my-work';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { WorkerJobSearchResults } from '../mocks/providers/workerJobSearchResults';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NxtLifeIonic2RatingModule } from 'nxtlife-ionic2-rating';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
	CustomerMyWorkPage,
	WorkerJobDetailPage,
	WorkerJobListPage,
	WorkerJobViewPage,
	CustomerJobViewPage,
	CustomerJobListPage,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NxtLifeIonic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    ContentPage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
	CustomerMyWorkPage,
	WorkerJobDetailPage,
	WorkerJobListPage,
	WorkerJobViewPage,
	CustomerJobViewPage,
	CustomerJobListPage,
    LoginPage,
    MapPage,
    MenuPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    WelcomePage
  ],
  providers: [
    Api,
    Items,
	WorkerJobSearchResults,
    User,
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
