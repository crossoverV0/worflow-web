import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router} from '@angular/router';
import { filter } from 'rxjs';
import { SideNavItemInterface } from 'src/app/common/interfaces/sidenav-item';

const NAV_ITEMS = [
  {
    title: 'Tarefas',
    class: 'bx bx-task bx-sm v-icon',
    link: '/tarefas/agora'
  },
  {
    title: 'Bugs',
    class: 'bx bx-bug-alt bx-sm v-icon',
    link: '/bugs'
  },
  {
    title: 'Notificações',
    class: 'bx bx-bell bx-sm v-icon',
    link: '/notificações'
  }
]

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  navItems: SideNavItemInterface[] = NAV_ITEMS
  currentRoute: string = ''

  router = inject(Router)

  ngOnInit(): void{
    this.currentRoute = this.router.url
    this.router.events
    .pipe(
      filter((event: any) => event instanceof NavigationStart)
    ).subscribe(event => { this.currentRoute = event.url});
  }

  navigate(link: string): void{
    this.router.navigateByUrl(link);
  }
}
