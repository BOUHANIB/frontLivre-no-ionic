import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor(private dialog: MatDialog) {}


  actions:Array<any>=[
    {title:"Home","route":"/home",icon:"house"},
    {title:"Exposants","route":"/exposants",icon:"archive"},
    {title:"Livres","route":"/livres",icon:"book"},
    {title:"Map","route":"/map",icon:"map"},

  ];

  currentAction : any;

  setCurrentAction(action: any) {
    this.currentAction=action;
  }


}
