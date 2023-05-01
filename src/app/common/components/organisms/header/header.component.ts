import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  items: NavItemInterface[] = []

  ngOnInit(): void {
    this.#navItemService.currentItem$
    .subscribe(
      (res) => {this.items = res}
    )
  }
}
