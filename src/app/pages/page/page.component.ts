import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/common/components/organisms/header/header.component';
import { SideNavComponent } from 'src/app/common/components/organisms/side-nav/side-nav.component';
import { ResponsiveService } from 'src/app/common/services/responsive.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, SideNavComponent, RouterModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'] 
})
export class PageComponent implements OnInit{
  reponsiveService = inject(ResponsiveService)
  marginContent: string = ''

  ngOnInit(): void {
    this.reponsiveService.contentMargin$.subscribe(
      (res) => this.marginContent = res
    )
  }

}
