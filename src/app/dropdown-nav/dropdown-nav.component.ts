import { Component, OnInit } from '@angular/core';
import {
  navLinks,
  navLinksTestAdmin,
  navLinksResults,
  NavLink,
} from './nav-links';

@Component({
  selector: 'app-dropdown-nav',
  templateUrl: './dropdown-nav.component.html',
  styleUrl: './dropdown-nav.component.css',
})
export class DropdownNavComponent implements OnInit {
  selectedRoute!: NavLink;
  showMenu = false;

  routes: NavLink[] = [];
  subRoutes: NavLink[] = [];

  ngOnInit() {
    this.routes = navLinks;
    this.subRoutes = navLinksTestAdmin;
    this.selectedRoute = navLinks[1];
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  setSelectedRoute(route: NavLink): void {
    console.log('navigating to', route.routerLink);
    this.selectedRoute = route;
    this.showMenu = false;
  }

  setSubRoutes(testId: string): void {
    if (testId === 'test-admin') {
      this.subRoutes = navLinksTestAdmin;
    } else {
      this.subRoutes = navLinksResults;
    }
  }
}
