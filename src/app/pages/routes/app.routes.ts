import { Routes } from '@angular/router';
import { AppComponent } from '../../app.component';

export const APP_ROUTES: Routes = [
   {
     path: '',
     component: AppComponent,
     loadChildren: () => import('./pages.routes').then(r => r.PAGES_ROUTES)
   }
 ]