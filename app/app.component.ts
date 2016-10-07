import { Component } from '@angular/core';

import { NavbarComponent }   from './components/navbar/navbar.components';

@Component({
    selector: 'my-app',
    template: `<navbar></navbar>
    <jumbotron></jumbotron>
   <div class="container">
   <router-outlet></router-outlet>
    </div>
    `
})


export class AppComponent { }
