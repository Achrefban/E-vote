import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  providers: [UserService]
})
export class IconsComponent implements OnInit {
  user: any = {};
  error: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {}

  register() {
    console.log(this.user)
    this.userService.newUser(this.user).subscribe(data => {
      console.log(data)
      if (!data.errors) {
        this.router.navigate(['dashborad']);
      } else {
        this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
        console.log('err test');
      }
    });
  }

}
