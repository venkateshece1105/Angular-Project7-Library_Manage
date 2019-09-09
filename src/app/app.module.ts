import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EditBlogComponent } from './editblog/editblog.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { Createblog1Component } from './createblog1/createblog1.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListBlogComponent } from './listblog/listblog.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    CardComponent,
    PortfolioComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    EditBlogComponent,    
    BookdetailComponent,
    Createblog1Component,
    ViewblogComponent,
    ListBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
