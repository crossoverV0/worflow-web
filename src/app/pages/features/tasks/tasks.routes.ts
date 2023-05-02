import { Routes } from '@angular/router';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agora'
  },
  {
    path: 'agora',
    loadComponent: () => import('../current-tasks/current-tasks.component')
    .then((c) => c.CurrentTasksComponent),
  },
  {
    path: 'disponiveis',
    loadComponent: () => import('../available/available.component')
    .then((c) => c.AvailableComponent),
  },

 ];