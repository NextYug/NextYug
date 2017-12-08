import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  _dataService;
  mainMenuList: Array<any> = [];
  subMenu;
  _route;  
  constructor(private dataService: DataService, private route: Router){
    this._dataService = dataService;
    this._route = route;
  }

  ngOnInit() {
    this._dataService.getData()
        .subscribe(
        (respData) => {
          if (respData.UIframework && respData.UIframework.length > 0){
            this.mainMenuList = respData.UIframework;
          }
        });
  }
}