import { Component } from "@angular/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
     classToggle() {
        const navs = document.querySelectorAll('.Navbar__Items');
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
      }
 }
