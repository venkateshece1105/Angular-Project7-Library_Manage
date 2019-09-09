import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  card = [
    {
      img: "assets/img/lib4.jpg",
      title:"ITEM ONE",
      price:"$30.99",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
  },
    {
      img: "assets/img/lib5.jpg",
      title:"ITEM TWO",
      price:"$38.67",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
    },
    {
      img: "assets/img/lib6.jpg",
      title:"ITEM THREE",
      price:"$45.34",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
    },
    {
      img:"assets/img/lib7.jpg",
      title:"ITEM FOUR",
      price:"$13.45",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
    },
    {
      img:"assets/img/lib8.jpg",
      title:"ITEM FIVE",
      price:"$33.24",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
    },
    {
      img:"assets/img/lib9.jpg",
      title:"ITEM SIX",
      price:"$65.64",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Amet numquam aspernatur!"
    }
  ];


  ngOnInit() {
  }

}
