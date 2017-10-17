import { Component, OnInit } from '@angular/core';
import { route } from './../app.router';
import { Router } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor(private routing:Router) { 
    
  }
  
  ngOnInit() {
  }

}
