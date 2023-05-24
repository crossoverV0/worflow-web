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
       },
       {
        title: 'Disponíveis',
        link: '/tarefas/disponiveis',
       }
    ]
  },
  {
    title: 'Bugs',
    icon: 'bug_report',
    link: '/bugs'
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


  currentPosition = 0
  lastPosition = 0
  lastIndex: number = 1
  screenWidth: number = 0

  moreDetails: boolean = false

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
    // this.setCurrentNavItems(childs)
    // this.router.navigateByUrl(link)
    // .then(() => {
    //   this.animatePoint(index)
    // })
    // .catch(error => {
    //   alert("Essa rota não existe!");
    // });
    if(childs.length > 0){
      this.showMoreDetails(this.screenWidth)
      this.childs = childs
    } else {
      this.moreDetails = false
      this.router.navigateByUrl(link)
      .catch(error => {
        alert("Essa rota não existe!");
      });
    }
  }

  showMoreDetails(screenWidth: number){
    this.moreDetails = true
    this.reponsiveService.resizingContent(screenWidth)
  }

  // animatePoint(index: number){
  //   let diference =  index - this.lastIndex
  //   if(this.lastIndex < index){
  //     this.currentPosition +=  50 * (diference)
  //   }else{
  //     this.currentPosition -=  50 * (diference * -1)
  //   }
  //   this.lastIndex = index
  // }
}
