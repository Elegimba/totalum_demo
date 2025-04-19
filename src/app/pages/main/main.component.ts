import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  imports: [FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent { 

  faBox = faBox
  faUser = faUser
  faCart = faCartShopping

}
