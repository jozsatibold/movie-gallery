import {Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {NotificationService} from "@shared/services";
import { NotificationComponent } from '@shared/components';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'mg-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    NotificationComponent,
    CommonModule,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  notification$ = this.notificationService.listener$;
  isMenuOpened = false;

  constructor(private notificationService: NotificationService) {}

  openMenu(visible: boolean): void {
    this.isMenuOpened = visible;
  }
}
