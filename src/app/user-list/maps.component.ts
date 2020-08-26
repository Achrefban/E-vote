import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
    providers: [UserService]
})
export class MapsComponent implements OnInit {

    utilisateurs: any = [];
    showModal: any;
    searchText: any ;
    private utilisateurId: string;


    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.userService.getAllUsers().subscribe(data => {
            if (data) {
                this.utilisateurs = data;
            }
        });
    }
    delete(utilisateurId) {
        console.log(this.utilisateurId);
        return this.userService.deleteUser(utilisateurId).subscribe(data => {alert('succes')});

    }


}
