import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  _http;
  current: any;
  
  private currentStatusSource = new BehaviorSubject<any>('');
  currentStatus = this.currentStatusSource.asObservable();

  constructor(http: Http) {
    this._http = http; 
   }

  getData() : Observable<any> {
    return this._http.get('assets/json/data.json')
               .map((response: Response) => response.json())
               .catch((error: any) => console.log(error));
  }

  setStatus(status: string) {
    this.currentStatusSource.next(status);
  }

}
