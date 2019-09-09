import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createblog1',
  templateUrl: './createblog1.component.html',
  styleUrls: ['./createblog1.component.css']
})
export class Createblog1Component implements OnInit {
  bookList
  constructor(public http: HttpClient, public router: Router) { }
  ngOnInit() {
    
    this.bookList = new FormGroup({
      bookName: new FormControl(),
      AuthorName: new FormControl(),
      image: new FormControl(),
      Description: new FormControl()
    })
  }
  submitData() {
    this.http.post('http://5d1e0d063374890014f00c26.mockapi.io/lib', this.bookList.value)
      .toPromise()
      .then((response) => {
        this.bookList = response;
      }, (error) => {
        console.log(error);
      })
  }


}
