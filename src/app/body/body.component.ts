import { route } from './../app.router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private routing:Router) { 
    // this.routing.navigate(['welcome']);
  }

  ngOnInit() {
  }

}
