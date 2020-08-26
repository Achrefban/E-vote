import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {ElectionService} from '../shared/services/election.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
    electionType: any = {};
    error: string;

    constructor(private router: Router, private electionService: ElectionService) { }

    ngOnInit() {}

    electionadd() {
        console.log(this.electionType)
        this.electionService.newElectionType(this.electionType).subscribe(data => {
            console.log(data)
            if (!data.errors) {
                this.router.navigate(['electionType/electionSession']);
            } else {
                this.error = 'Votre formulaire est incomplet ou comporte des erreurs !';
                console.log('err test');
            }
        });
    }
}
