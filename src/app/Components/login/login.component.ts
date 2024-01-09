import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../Services/Users/users.service';
import { User } from '../../Classes/User/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl("", [Validators.required]);
  responseMessage = { id: 0, name: "" };
  hide = true;
  constructor(
    private _usersS: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  SignIn(): void {
    if (this.emailFormControl.value === "" || this.passwordFormControl.value === "" || this.emailFormControl.invalid) {
      this.emailFormControl.markAsTouched();
      this.passwordFormControl.markAsTouched();
      return;
    } else {

      const user: User = {
        id: undefined!,
        name: undefined!,
        email: this.emailFormControl.value!,
        password: this.passwordFormControl.value!
      };
      this._usersS.UserLogin(user).subscribe(response => {
        this.responseMessage = response;
        if (this.responseMessage.id === 1) {
            this.router.navigate(["Profile"]); 
            let userData = response.name;
            localStorage.setItem("userData", userData);
        }
      })
    }
  }

  NotFirstSpaces(event: KeyboardEvent): void {
    if (event.code === "Space") {
      event.preventDefault();
    }
  }

}
