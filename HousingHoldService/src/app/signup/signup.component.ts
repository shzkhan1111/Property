import { Component } from '@angular/core';
import { User } from '../models/user';

import { makeStyles } from '@material-ui/core/styles';
import { TreeView, TreeItem } from '@material-ui/lab';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'HousingHoldService';
  user : User = new User();
  locationControl = new FormControl();
  karachiLocations = ['North Nazimabad', 'Layari'];
  lahoreLocations = ['Town1', 'Town2'];



  onSubmit() : void{
    console.log(this.user)

  }
}
