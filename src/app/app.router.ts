import { Photos5Component } from './photos5/photos5.component';
import { Photos4Component } from './photos4/photos4.component';
import { Photos3Component } from './photos3/photos3.component';
import { Photos2Component } from './photos2/photos2.component';
import { Photos1Component } from './photos1/photos1.component';
import { BodyComponent } from './body/body.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

export const routes:Routes=[
    {path:"",redirectTo:"welcome",pathMatch:"full"},
    // {path:"welcome",component:WelcomeComponent,children:[ 
    //     {path:"body",component:BodyComponent}
    //    ]},
     
  
                     {path:"welcome",component:WelcomeComponent},
                     {path:"body",component:BodyComponent},
                    {path:"photos",component:AboutmeComponent},
                    {path:"photos1",component:Photos1Component},
                       {path:"photos2",component:Photos2Component},
                          {path:"photos3",component:Photos3Component},
                          {path:"photos4",component:Photos4Component},
                          {path:"photos5",component:Photos5Component}
];
export const route:ModuleWithProviders=RouterModule.forRoot(routes);