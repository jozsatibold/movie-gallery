import { Component } from '@angular/core';
import { NotificationService } from '@shared/services';

@Component({
  selector: 'mg-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
})
export class LandingComponent {

  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.notify('Test notification', 'error');
  }
}
