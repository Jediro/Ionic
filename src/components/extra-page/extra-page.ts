import { Component } from '@angular/core';

/**
 * Generated class for the ExtraPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'extra-page',
  templateUrl: 'extra-page.html'
})
export class ExtraPageComponent {

  text: string;

  constructor() {
    console.log('Hello ExtraPageComponent Component');
    this.text = 'Hello World';
  }

}
