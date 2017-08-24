import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WorkerJobSearchResult } from '../../models/workerJobSearchResult';

@Injectable()
export class WorkerJobSearchResults {
  workerJobSearchResults: WorkerJobSearchResult[] = [];

  defaultWorkerJobSearchResult: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/checkbox-icon.png",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let workerJobSearchResults = [
      {
        "name": "Run an errand",
        "profilePic": "assets/img/checkbox-icon.png",
        "about": "Ameerpet, 600 Rs"
      },
      {
        "name": "Deliver Package",
        "profilePic": "assets/img/checkbox-icon.png",
        "about": "Secunderabad, 200 Rs"
      },
      {
        "name": "Babysitting",
        "profilePic": "assets/img/checkbox-icon.png",
        "about": "Madhapur, 2000 Rs"
      },
      {
        "name": "Pack things",
        "profilePic": "assets/img/checkbox-icon.png",
        "about": "Madhapur, 100 Rs"
      }
    ];

    for (let workerJobSearchResult of workerJobSearchResults) {
      this.workerJobSearchResults.push(new WorkerJobSearchResult(workerJobSearchResult));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.workerJobSearchResults;
    }

    return this.workerJobSearchResults.filter((workerJobSearchResult) => {
      for (let key in params) {
        let field = workerJobSearchResult[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return workerJobSearchResult;
        } else if (field == params[key]) {
          return workerJobSearchResult;
        }
      }
      return null;
    });
  }

  add(workerJobSearchResult: WorkerJobSearchResult) {
    this.workerJobSearchResults.push(workerJobSearchResult);
  }

  delete(workerJobSearchResult: WorkerJobSearchResult) {
    this.workerJobSearchResults.splice(this.workerJobSearchResults.indexOf(workerJobSearchResult), 1);
  }
}
