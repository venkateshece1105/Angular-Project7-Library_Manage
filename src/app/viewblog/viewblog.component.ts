import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray} from '@angular/forms';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
bookForm;
  
  
constructor(public activatedRoute: ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://5d1e0d063374890014f00c26.mockapi.io/lib')
      .toPromise()
      .then((response) => {
        this.bookForm = response;
      }, (error) => {
        console.log(error);
      })
  }

}
