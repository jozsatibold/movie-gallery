import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Output } from '@angular/core';
import { Notification } from '@global/models';
import { BehaviorSubject } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface NotificationConfig {
 bgColor: string;
 message: string;
}

@Component({
  selector: 'mg-notification',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    @if (notification$ | async; as notification) {
      <div
        [ngClass]="[
          'fixed left-1/2 -translate-x-1/2 z-50 rounded-md shadow-xl text-white',
          'font-medium w-[500px] max-w-[95vw] bottom-3 md:bottom-auto md:top-3 py-3 px-4',
          notification?.bgColor,
          'flex items-center md:gap-2 gap-4 justify-between'
        ]">
        <p>{{ notification?.message }}</p>
        <button
          (click)="close()"
          class="p-1.5 focus:ring-2 focus:ring-white/20 hover:bg-white/5 transition-colors duration-200 rounded-md ease-in-out">
          <img
            ngSrc="assets/svg/close-fill.svg"
            alt="Close notification"
            width="24"
            height="24" />
        </button>
      </div>
    }
  `,
})
export class NotificationComponent {
  notification = input.required<Notification | null>();
  @Output() closed = new EventEmitter<void>();
  private intervalId: any;
  notification$ = new BehaviorSubject<NotificationConfig | null>(null);

  constructor() {
    effect(() => {
      const notification = this.notification();
      if (!notification) {
        this.notification$.next(null);
        this._clearInterval();
      } else {
        this.notification$.next({
          message: notification.message,
          bgColor: this._getBackgroundColor(),
        });
        this._startTimer();
      }
    });
  }
  _startTimer() {
    this._clearInterval();
    this.intervalId = setTimeout(() => {
      if (this.notification$.getValue()) {
        this.notification$.next(null);
        this.intervalId = null;
      }
    }, 50000);
  }

  _clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }
  close() {
    this._clearInterval();
    this.closed.emit();
    this.notification$.next(null);
  }
  _getBackgroundColor() {
    const notification = this.notification();
    if (!notification) {
      return '';
    }
    switch (notification.type) {
      case 'error':
        return 'bg-red-600';
      case 'warning':
        return 'bg-yellow-400';
      case 'success':
        return 'bg-green-600';
      case 'info':
        return 'bg-blue-600';
      default:
        return '';
    }
  }
}
