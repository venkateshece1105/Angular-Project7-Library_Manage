import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { Createblog1Component } from './createblog1/createblog1.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { ListBlogComponent } from './listblog/listblog.component';
import { EditBlogComponent } from './editblog/editblog.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'bookdetail/:id',
    component: BookdetailComponent
  },
  {
    path: "viewblog",
    component: ViewblogComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "createblog1",
        component: Createblog1Component
      },
      {
        path : 'listblog',
        component : ListBlogComponent
      },
      {
        path: 'editblog/:id',
        component : EditBlogComponent
      }

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
