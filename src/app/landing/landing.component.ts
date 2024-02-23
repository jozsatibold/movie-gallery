import { Component } from '@angular/core';
import { NotificationService } from '@shared/services';

@Component({
  selector: 'mg-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.notify('Test asdljasnd kajsbdaksh bdkasjkjdkjbdkashkdujludif haweifnbawerk nfaiwln haiku', 'error');
  }
}
