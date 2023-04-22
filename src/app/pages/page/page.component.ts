import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/common/components/organisms/header/header.component';
import { SideNavComponent } from 'src/app/common/components/organisms/side-nav/side-nav.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, SideNavComponent, RouterModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent{
  theme: string = ''

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  toggleTheme() {
    // const body = this.elementRef.nativeElement.querySelector('body');
    // this.renderer.removeClass(body, 'dark');
    // this.renderer.addClass(body, 'dark');
    // console.log(body.className)
      console.log(this.theme)
      this.theme = 'dark';

  }

}
