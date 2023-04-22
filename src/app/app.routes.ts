import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
   {
     path: '',
     loadChildren: () => import('./pages/page/pages.routes').then(r => r.PAGES_ROUTES)
   }
 ]
