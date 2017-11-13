import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  @Input()
  menulist: Array<any> = [];
  displayMenu: Array<any> = [];
  _dataService;
  keyWordSearch: any;

  constructor(dataService: DataService) {
    this._dataService = dataService;
    //this._dataService.setStatus('JavaScript');
  }

  ngOnInit () {
    //inserting uniq elements menu
    this.menulist.forEach(item => {
      if (this.displayMenu.indexOf(item.category) == -1) {
        this.displayMenu.push(item.category);
      }
    });
  }

  changeView(menu: string) {
    //console.log(menu);
    this._dataService.setStatus(menu);
  }

  clearSearch() {
    console.log(this.keyWordSearch);
    this.keyWordSearch = {};
  }

  search = (text$: Observable<any>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 0 ? []
        : this.menulist.filter(v => (v.name.toLowerCase().indexOf(term.toLowerCase()) > -1) || 
                                     v.description.toLowerCase().indexOf(term.toLowerCase()) > -1));

  formatter = (x: { name: string }) => x.name;



}
