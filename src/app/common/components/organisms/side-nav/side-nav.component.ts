import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const NAV_ITEMS = [
  {
    title: 'Tarefas',
    class: 'bx bx-task bx-sm v-icon'
  },
  {
    title: 'Bugs',
    class: 'bx bx-bug-alt bx-sm v-icon'
  },
  {
    title: 'Notificações',
    class: 'bx bx-bell bx-sm v-icon'
  }
]

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  navItems: any[] = NAV_ITEMS
}
