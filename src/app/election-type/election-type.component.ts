import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {ElectionTypeService} from '../shared/services/election-type.service';

@Component({
  selector: 'app-election-type',
  templateUrl: './election-type.component.html',
  styleUrls: ['./election-type.component.css'],
  providers: [ElectionTypeService]
})
export class ElectionTypeComponent implements OnInit {
  electionType: any = {};
  error: string;
  constructor(private router: Router, private electionTypeservice: ElectionTypeService) { }
  ngOnInit() {
  }

  add() {
    console.log(this.electionType)
    this.electionTypeservice.newElectionType(this.electionType).subscribe(data => {
      console.log(data)
      if (!data.errors) {
        this.router.navigate(['electionSession']);
      } else {
        this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
        console.log('err test');
      }
    });
  }

}
