import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
    });
    service = TestBed.inject(NotificationService);
  });

  it('should emit notification on notify', () => {
    const message = 'Test message';
    const type = 'success';

    service.notify(message, type);

    service.listener$.subscribe(result =>
      expect(result).toEqual(jasmine.objectContaining({ message, type }))
    );
  });

  it('should not emit notification for empty message', () => {
    const isSent = service.notify('');
    expect(isSent).toEqual(false);
  });
});
