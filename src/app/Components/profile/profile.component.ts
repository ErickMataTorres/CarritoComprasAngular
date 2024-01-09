import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Classes/User/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  editProfile: boolean = false;
  userData?: User;

  ngOnInit(): void {
      this.AsignValuesToUser();
  }

  AsignValuesToUser():void{
    const data = localStorage.getItem("userData");
    let arrayUserData = data?.split("|");
    this.userData = {
      id: Number(arrayUserData![1]),
      name: arrayUserData![2],
      email: arrayUserData![3],
      password: undefined!
    };
  }

}
