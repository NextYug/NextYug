import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { JavaCompComponent } from './java-comp/java-comp.component';

const appRoutes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'java', component: JavaCompComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,
    MainContentComponent,
    JavaCompComponent
  ],
  imports: [
    BrowserModule1,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
