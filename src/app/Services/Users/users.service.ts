import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Classes/User/user';
import { enviroment } from '../../../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(
    private http: HttpClient
  ) { }

    UserLogin(user: User):Observable<User>{
      // const httpHeaders = new HttpHeaders()
      //   .set("Content-Type", "application/json");
      return this.http.post<User>(enviroment.Url + "/Users/UserLogin",user);
    }

}
