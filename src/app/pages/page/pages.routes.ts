import { Routes } from '@angular/router';
import { PageComponent } from './page.component';

export const PAGES_ROUTES: Routes = [
   {
     path: '',
     component: PageComponent,
     loadChildren: () => import('../features/features.routes').then(r => r.FEATURES_ROUTES)
   },
 ];