import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var options = {
      strings: ["Hi", "My Name Is Vishal Pandey", "I am a Coder", "I am a Developer", "I am a Travelar", "I am a Designer", "This is my portfolio website", "You can find my work here"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
      smartBackspace: true,
    }
    var typed = new Typed(".intro", options);
    
    (document.querySelector(".typed-cursor") as HTMLElement).style.fontSize = "20px";
    (document.querySelector(".typed-cursor") as HTMLElement).style.color = "white";

  }

  theClose:boolean = true;

}
