import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {NotificationTypes, Notification} from "@global/models";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications$ = new Subject<Notification>();
  public listener$ = this.notifications$.asObservable();

  notify(message: string, type: NotificationTypes = 'info') {
    if (!message) {
      return;
    }
    this.notifications$.next({ message, type })
  }
}
