import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { WorkerJobSearchResult } from '../models/workerJobSearchResult';

@Injectable()
export class WorkerJobSearchResults {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/workerJobSearchResults', params)
      .map(resp => resp.json());
  }

  add(workerJobSearchResult: WorkerJobSearchResult) {
  }

  delete(workerJobSearchResult: WorkerJobSearchResult) {
  }

}
