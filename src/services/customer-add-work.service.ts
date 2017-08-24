import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class CustomerAddWorkService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    addWorkByCustomer() {
        var url = 'http://localhost:8888/WorkMobileApp/rest/customers';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
}