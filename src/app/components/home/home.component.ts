import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  upcomingEvents = [
    {
      date: "2/2/19",
      name: "The Star  Education Fair",
      venue: "Spice Arena",
      state: "Penang"
    },
    {
      date: "2/4/19",
      name: "The Facon Education Fair",
      venue: "Spice Arena",
      state: "Penang"
    },
    {
      date: "6/7/19",
      name: "The Surework Education Fair",
      venue: "Spice Arena",
      state: "Penang"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
