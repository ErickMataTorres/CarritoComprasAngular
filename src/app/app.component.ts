import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CarritoComprasAngular';

ngOnInit(): void {
    this.ValidateUserSesion();
}

  ValidateUserSesion(): void {
    if(typeof localStorage !== "undefined"){
      const userData = localStorage.getItem("userData");
      if(userData){
        console.log("You are logged in");
      }else{
        console.log("You have to log in");
      }
    }
  }
}
