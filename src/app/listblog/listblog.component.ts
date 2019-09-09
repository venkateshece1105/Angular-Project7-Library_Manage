import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogList;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.http.get('http://5d1e0d063374890014f00c26.mockapi.io/lib')
      .toPromise()
      .then((response) => {
        this.blogList = response;
      }, (error) => {
        console.log(error);
      })
  }

  deleteBlog(id) {
    let result = confirm("Are you sure do you want to delete?");
    if (result == true) {
      console.log(id);
      this.http.delete(`http://5d1e0d063374890014f00c26.mockapi.io/lib/${id}`)
        .toPromise()
        .then((response) => {
          this.blogList=response;
          this.loadData();
        },
          (error) => {
            console.log(error);
          })
    }
  }
}


