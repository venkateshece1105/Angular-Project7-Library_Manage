import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray} from '@angular/forms';
import { HttpClient} from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookForm;
    
    
  constructor(public activatedRoute: ActivatedRoute,public http:HttpClient) { }
  
    ngOnInit() {
      this.http.get('http://5d1e0d063374890014f00c26.mockapi.io/lib')
        .toPromise()
        .then((response) => {
          console.log(response)
          this.bookForm = response;
        }, (error) => {
          console.log(error);
        })
    }
  
  }
