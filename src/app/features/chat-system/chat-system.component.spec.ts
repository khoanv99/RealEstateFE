import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSystemComponent } from './chat-system.component';

describe('ChatSystemComponent', () => {
  let component: ChatSystemComponent;
  let fixture: ComponentFixture<ChatSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSystemComponent]
    });
    fixture = TestBed.createComponent(ChatSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
