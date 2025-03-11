import { Component } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-admin-dashboard></app-admin-dashboard>',
  imports: [AdminDashboardComponent]
})
export class AppComponent {}
