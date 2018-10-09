import { Component } from '@angular/core';
declare var window: any; // Create a variable for use below
@Component({
  selector: '#app-root',  // Append your application/component to selected DOM element, in our case the Body element.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loaded: Boolean = false;  // Check if loaded if you want to import other components than the basic ones.
  items: any; // Just a sample for populating items in the main navigation.

  constructor() {
    window.CorporateUi.baseComponents(); // Use the window variable when loading the basic components (corporate header, main content, main navigation and corporate footer)
    this.loaded = true;  // After the basic components are added, then it's OK to add additional components.
    this.items = [{  // Populating some random items in the main navigation.
      id: 1,
      name: 'home',
      link: '/'
    },
    {
      id: 2,
      name: 'contact',
      link: '/contact'
    }];
  }
}
