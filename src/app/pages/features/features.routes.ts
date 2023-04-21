import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

export const FEATURES_ROUTES: Routes = [
   {
     path: '',
     component: TasksComponent,
     loadChildren: () => import('./tasks/tasks.routes').then(r => r.TASKS_ROUTES)
   },
 ];