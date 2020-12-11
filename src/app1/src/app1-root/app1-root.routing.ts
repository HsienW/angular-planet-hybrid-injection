import {Route} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';
import {App1RouterOutletComponent} from './app1-router-outlet.component';

export const routers: Route[] = [
  {
    path: 'app1',
    component: App1RouterOutletComponent,
    children: [
      {
        path: '',
        redirectTo: 'app1',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../app1-dashboard/app1-dashboard.module').then(m => m.App1DashboardModule)
      },
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
