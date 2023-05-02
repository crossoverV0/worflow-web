import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NavItemInterface } from 'src/app/common/interfaces/nav-item';
import { NavItemsService } from 'src/app/common/services/nav-items.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  #navItemService = inject(NavItemsService)
  #router = inject(Router)

  currentRoute: string = ''
  items: NavItemInterface[] = []

  ngOnInit(): void {
    this.currentRoute = this.#router.url
    this.initListner()
    this.#navItemService.currentItem$
    .subscribe(
      (res) => {this.items = res}
    )
  }

  initListner(){
    this.#router.events.pipe(
    filter((event: any) => event instanceof NavigationStart)
    ).subscribe(event => { this.currentRoute = event.url});
      console.log(this.currentRoute)
  }

  navigate(link: string){
    console.log('ola mundo')
    this.#router.navigateByUrl(link)
  }
}
