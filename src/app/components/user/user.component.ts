import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public usersService: UsersService) { }
  
  // register() {
  //   console.log(this.email);
  //   console.log(this.password);
  // }
  reg() {
    const user = {email: this.email, password: this.password};
    this.usersService.login(user).subscribe( data => {
      console.log(data);
  });
}
  
  ngOnInit(): void {
  }

}
