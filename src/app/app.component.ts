import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {NotificationService} from "@shared/services";
import { NotificationComponent } from '@shared/components/notification/notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mg-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NotificationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  notification$= this.notificationService.listener$;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}
}
