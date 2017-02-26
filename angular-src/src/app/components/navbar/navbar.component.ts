import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Router } from '@angular2/router';
>>>>>>> a0ded925fa06c0c4b8ff8b110d361a3e4d01a4d6

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private flashMessages: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessages.show('You have been Logged Out', { cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
  }

}
