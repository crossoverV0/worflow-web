import {
  Component
} from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/common/components/organisms/header/header.component';
import { SideNavComponent } from 'src/app/common/components/organisms/side-nav/side-nav.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, RouterOutlet],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {}
