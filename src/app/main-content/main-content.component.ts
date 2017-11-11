import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent implements OnInit {
  //providers
  private _dataService
  private _router;

  // varibales 
  private frameWorks = [];
  private displayFrameWorks = [];
  private currentStatus;

  constructor(private dataService: DataService, private router: Router) {
    this._dataService  =  dataService;
    this._router = router;
  }

  changeView(view: string) {
    console.log(view);
    this.currentStatus = view;
  }

  filterDataWithRoute() {
    let parm = this._router.url;
    let filterdata = [];
    this.displayFrameWorks = [];
    if (parm !== '') {
      this.frameWorks.forEach(function (item) {
        if (item && item.category && parm.indexOf(item.category) > -1) {
          //console.log(item);
          filterdata.push(item);
        }
      });
    }
    this.displayFrameWorks = filterdata;
  }

  ngOnInit() {
    //getting the data
    this._dataService.getData()
        .subscribe(
        (respData) => {
          if (respData.UIframework && respData.UIframework.length > 0) {
            this.frameWorks = respData.UIframework;
            this.filterDataWithRoute()
          }
        });
    //get the current status from dataservice
    this._dataService.currentStatus.subscribe(current => this.currentStatus = current);
  
    // checking for route change and tigger a function
    this._router.events.subscribe((event) => {
      if (this._router.url !== '/')
      this.filterDataWithRoute();
    });
  }
}
