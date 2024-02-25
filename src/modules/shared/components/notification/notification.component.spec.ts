import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { NotificationComponent } from '@shared/components';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.componentRef.setInput('notification', {
      message: 'Test notification',
      type: 'error',
    });
    expect(component).toBeTruthy();
  });

  it('should display notification message and close button', () => {
    const notification = { message: 'Test notification', type: 'error' };
    fixture = TestBed.createComponent(NotificationComponent);
    fixture.componentRef.setInput('notification', notification);
    fixture.detectChanges();
    fixture.componentInstance.notification$.subscribe(value =>
      expect(value?.message).toEqual(notification.message)
    );

    fixture.componentRef.setInput('notification', notification);
    const notificationElement: HTMLElement = fixture.nativeElement;
    expect(notificationElement.querySelector('p')?.textContent).toContain(
      notification.message
    );
    expect(notificationElement.querySelector('button')).toBeTruthy();
  });
});
