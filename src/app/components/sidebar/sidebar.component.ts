import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public sidebarService: SidebarService) { }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeSidebarIfMobile();
  }

  closeSidebarIfMobile() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
      this.sidebarService.toggleSidebar();
    }
  }

  toggleSidebar() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 769) {
      this.sidebarService.toggleSidebar();
    } else {
      this.closeSidebarIfMobile();
    }
  }
}
