import { Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

export const routes: Routes = [
  { path: 'widgets', component: WidgetsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'widgets/:id', component: WidgetDetailComponent },
];
