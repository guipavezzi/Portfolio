import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  sidebarStatus$ = this.sidebarOpen.asObservable();

  toggleSidebar() {
    const currentStatus = !this.sidebarOpen.value;
    this.sidebarOpen.next(currentStatus);
    this.setBodyScroll(currentStatus);
  }

  setSidebarStatus(isOpen: boolean) {
    this.sidebarOpen.next(isOpen);
    this.setBodyScroll(isOpen);
  }

  private setBodyScroll(isOpen: boolean) {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
}
}