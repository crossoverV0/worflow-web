import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router} from '@angular/router';
import { filter } from 'rxjs';
import { SideNavItemInterface } from 'src/app/common/interfaces/sidenav-item';

const NAV_ITEMS = [
  {
    title: 'Tarefas',
    class: 'bx bx-task bx-sm v-icon',
    link: '/tarefas/agora',
    chids: {}
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
  currentPosition = 15.4

  router = inject(Router)

  ngOnInit(): void{
    this.currentRoute = this.router.url
    this.initListner()
  }

  initListner(){
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationStart)
      ).subscribe(event => { this.currentRoute = event.url});
  }

  navigate(link: string, index: number): void{
    this.router.navigateByUrl(link)
    .then(() => {
      this.animatePoint(index)
    })
    .catch(error => {
      alert("Essa rota não existe!");
    });
  }

  animatePoint(index: number){
    let position = 15.4 + (53.6 * (index - 1))
    console.log(index)
    console.log(position)
    this.currentPosition = position;
  }
}
