import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {ElectionSessionService} from '../shared/services/election-session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, ElectionSessionService]
})
export class LoginComponent implements OnInit {
  user: any = {};
  error: string;
  roleData = String;
  role: String;
  elections: any[];

  constructor(private router: Router, private userService: UserService, private electionService: ElectionSessionService) { }

  ngOnInit() {

    this.getAllCandidats();
  }
  login() {
    this.userService.loginUser(this.user).subscribe(data => {
      console.log(data)
      this.roleData=data['role']
      this.role=this.roleData.toString();
      console.log("role :",this.role)
      if (data) {
        localStorage.setItem('user', JSON.stringify(data));
        if (this.role === 'admin')  {
          this.router.navigate(['dashboard']);
        }
        else if (this.role === 'respEnregistrement') {
          this.router.navigate(['resp']);
        }
        else if (this.role === 'respVote'){
          for (let i = 0; i < this.elections.length ; i++  ) {
            console.log("souha", this.elections[i].etat);
            if (this.elections[i].etat ==='active') {
              this.router.navigate(['electeur/auth']);
            }

          }
          this.error = 'Sessiom desactive.';
          }

      } else {
        this.error = 'Identifiant et/ou mot de passe incorrect.';
      }
    });
  }



  getAllCandidats() {
    this.electionService.getAllElection().subscribe(data => {
      if (data) {
        console.log('allElection', data);
        this.elections = data;

      }
    });
  }
}





