import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/components/organisms/header/header.component';
import { SideNavComponent } from 'src/app/shared/components/organisms/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, SideNavComponent, RouterModule],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'] 
})
export class PageComponent{

}
