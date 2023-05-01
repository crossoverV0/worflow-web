import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router} from '@angular/router';
import { filter } from 'rxjs';
import { SideNavItemInterface } from 'src/app/common/interfaces/sidenav-item';
import { NavItemsService } from 'src/app/common/services/nav-items.service';
import { NavItemInterface } from 'src/app/common/interfaces/nav-item';

const NAV_ITEMS: SideNavItemInterface[] = [
  {
    title: 'Tarefas',
    class: 'bx bx-task bx-sm v-icon',
    link: '/tarefas/agora',
    childs: [
      {
        title: 'Agora',
        link: '/agora',
       },
       {
        title: 'Disponíveis',
        link: '/disponiveis',
       }
    ]
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
  childs: NavItemInterface[] = []
  currentPosition = 5.4
  lastPosition = 0

  router = inject(Router)
  navItemService = inject(NavItemsService)

  ngOnInit(): void{
    this.currentRoute = this.router.url
    this.initListner()
  }

  setCurrentNavItems(navItems: NavItemInterface[]){
    this.navItemService.set(navItems)
  }

  initListner(){
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationStart)
      ).subscribe(event => { this.currentRoute = event.url});
  }

  navigate(link: string, index: number, childs: NavItemInterface[]): void{
    this.setCurrentNavItems(childs)
    this.router.navigateByUrl(link)
    .then(() => {
      this.animatePoint(index)
    })
    .catch(error => {
      alert("Essa rota não existe!");
    });
  }

  lastIndex: number = 1
  animatePoint(index: number){
    let diference =  index - this.lastIndex
    if(this.lastIndex < index){
      this.currentPosition +=  54 * (diference)
      console.log(this.currentPosition)
    }else{
      this.currentPosition -=  54 * (diference * -1)
    }
    this.lastIndex = index
  }
}
