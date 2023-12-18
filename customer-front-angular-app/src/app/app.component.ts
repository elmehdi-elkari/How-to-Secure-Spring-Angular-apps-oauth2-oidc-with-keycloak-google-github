import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./services/security.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'customer-front-angular-app';

  constructor(public secService : SecurityService, private keycloak: KeycloakService) {
  }
  ngOnInit(): void {
  }

  async login() {
    await this.keycloak.login({
      redirectUri: window.location.origin
    });

  }

  logout() {
    this.keycloak.logout(window.location.origin)
  }
}
