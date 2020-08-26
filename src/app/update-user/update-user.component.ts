import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {CandidatsService} from '../shared/services/candidats.service';
import {ElectionTypeService} from '../shared/services/election-type.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  providers: [UserService]

})
export class UpdateUserComponent implements OnInit {

  user: any = {};
  userId: any;
  error: any;
  success: any;
  constructor(private router: Router, private userService: UserService,  private route: ActivatedRoute) { }


  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(this.userId).subscribe(data => {
      if (!data.errors) {
        this.user = data;
        console.log("test user update")
      } else {
        this.error = 'une erreur s est produite !';
      }
    });
  }
  update() {
    this.success = '';
    this.error = '';
    this.userService.updateUser(this.userId, this.user).subscribe(data => {
      if (!data.errors) {
        localStorage.setItem('user', JSON.stringify(data));
        this.success = 'Les modifications ont été enregistrées avec succès.';
        this.router.navigate(['user-list']);
      } else {
        this.error = 'une erreur s est produite veuillez vérifier vos informations !';
      }
    });
  }

}
