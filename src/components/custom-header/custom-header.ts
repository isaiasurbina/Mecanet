import { Component } from '@angular/core';

/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

  username: string;
  location: string;

  constructor() {
    console.log('Hello CustomHeaderComponent Component');
    this.username = 'Alan Smith';
    this.location = 'Santa Tecla, La Libertad';
  }

}
