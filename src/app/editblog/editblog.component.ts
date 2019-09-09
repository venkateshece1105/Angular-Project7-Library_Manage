import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-editblog",
  templateUrl: "./editblog.component.html",
  styleUrls: ["./editblog.component.css"]
})
export class EditBlogComponent implements OnInit {
  bookForm;

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public router: Router
  ) {
    this.bookForm = new FormGroup({
     bookName: new FormControl(),
      AuthorName: new FormControl(),
      image: new FormControl(),
      Description: new FormControl()
    });
  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))
    this.http.get(`http://5d1e0d063374890014f00c26.mockapi.io/lib/${this.activatedRoute.snapshot.paramMap.get('id')}`)
      .toPromise()
      .then((response:any) => {
        console.log(response)
          this.bookForm.setValue({
            
            AuthorName: response.AuthorName,
            Description: response.Description,
            bookName: response.bookName,
            image: response.image,
            
          })
        },
        (error) => {
          console.log("error");
        }
      );
  }
  PostBlog() {
    this.http.put(`http://5d1e0d063374890014f00c26.mockapi.io/lib/${this.activatedRoute.snapshot.paramMap.get("id")}`,this.bookForm.value)
      .toPromise()
      .then((response) => {
          this.router.navigate(["dashboard/listblog"]);
        },
        (error) => { 
          console.log(error);
        });
  }
}
