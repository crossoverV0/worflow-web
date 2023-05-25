import { Component, HostListener, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router} from '@angular/router';
import { filter } from 'rxjs';
import { SideNavItemInterface } from 'src/app/common/interfaces/sidenav-item';
import { NavItemsService } from 'src/app/common/services/nav-items.service';
import { NavItemInterface } from 'src/app/common/interfaces/nav-item';
import { ResponsiveService } from 'src/app/common/services/responsive.service';

const NAV_ITEMS: SideNavItemInterface[] = [
  {
    title: 'Tarefas',
    icon: 'dataset',
    link: '/tarefas/agora',
    source: '/tarefa',
    childs: [
      {
        title: 'Agora',
        link: '/tarefas/agora',
        icon: 'timer'
       },
       {
        title: 'Disponíveis',
        link: '/tarefas/disponiveis',
        icon: 'view_list'
       },
       {
        title: 'Bugs',
        link: '/tarefas/bugs',
        icon: 'bug_report'
       }
    ]
  },
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

  screenWidth: number = 0

  router = inject(Router)
  navItemService = inject(NavItemsService)
  reponsiveService = inject(ResponsiveService)


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void{
    this.currentRoute = this.router.url
    this.initListner()
    this.screenWidth = window.innerWidth
    this.childs = this.navItems.filter(e => e.link == this.currentRoute)[0].childs ?? []
  }

  setCurrentNavItems(navItems: NavItemInterface[]){
    this.navItemService.set(navItems)
  }

  initListner(){
    this.router.events.pipe(
    filter((event: any) => event instanceof NavigationStart)
    ).subscribe(event => { this.currentRoute = event.url});
  }

  onCLickItem(link: string, index: number, childs: NavItemInterface[]): void{
    if(childs.length > 0 && this.childs.length > 0) return
    if(childs.length == 0 && this.childs.length == 0) return
    if(childs.length > 0 && this.childs.length == 0) {
      this.childs = childs
      this.resizingScreen('OPEN')
    }
    if(childs.length == 0 && this.childs.length > 0) {
      this.childs = []
      this.resizingScreen('CLOSE')
    }

    this.navigate(link)
  }

  onClickChildItem(link: string){
    this.navigate(link)
  }

  resizingScreen(action: string){
    if(this.screenWidth >= 1440 && action == 'OPEN'){
      this.reponsiveService.resizingContent('mc-1')
    }else{
      this.reponsiveService.resizingContent('mc-0')
    }
  }

  navigate(link: string){
    this.router.navigateByUrl(link)
    .catch(error => {
      alert("Essa rota não existe!");
    });
  }
}
