import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent { 

  faBox = faBox
  faUser = faUser
  faCart = faCartShopping

}
