import { ListMasterPage } from './list-master/list-master';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { CustomerMyWorkPage } from './customer-my-work/customer-my-work'; 
import { WorkerJobListPage } from './worker-job-list/worker-job-list';
import { CustomerJobListPage } from './customer-job-list/customer-job-list';
import { MapPage } from './map/map'; 

// The page the user lands on after opening the app and without a session
//export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ListMasterPage;
export const Tab2Root = WorkerJobListPage;
export const Tab3Root = CustomerMyWorkPage;
export const Tab4Root = CustomerJobListPage;
export const Tab5Root = MapPage;
export const Tab6Root = SettingsPage;
