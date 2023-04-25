import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router} from '@angular/router';

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
export class SideNavComponent implements OnInit{
  navItems: any[] = NAV_ITEMS

  constructor(private router: Router){}

  ngOnInit(): void{
    console.log(this.router)
    console.log(this.router.url)
  }
}
