import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public usersService: UsersService) { }
  login() {
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe( data => {
      console.log(data);
  });
}

  ngOnInit(): void {
  }

}
