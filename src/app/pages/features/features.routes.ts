import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'tarefas',
    pathMatch: 'full'
  },
  {
    path: 'tarefas',
    component: TasksComponent,
    loadChildren: () => import('./tasks/tasks.routes').then(r => r.TASKS_ROUTES)
  },
  {
    path: 'bugs',
    loadComponent: () => import('./bugs/bugs.component')
    .then((c) => c.BugsComponent),
  }
 ];