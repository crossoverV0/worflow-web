import { Routes } from '@angular/router';

export const TASKS_ROUTES: Routes = [
   {
     path: '',
     loadComponent: () => import('../current-tasks/current-tasks.component')
     .then((c) => c.CurrentTasksComponent),
   },
   {
      path:'agora',
      redirectTo: ''
   }
 ];