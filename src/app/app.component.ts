import { Component } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeService } from './common/services/theme.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `<div [class]="theme">
    <!-- <button (click)="themeE()">Change Theme</button> -->
  <router-outlet></router-outlet></div>`,
})
export class AppComponent {
  title = 'workflow';
  theme = 'light';

  model: FormGroup = this.getForm()

  constructor(
    private _builder: FormBuilder,
  ){}

  getForm(){
    return this._builder.group({
      texto: ['teste']
    });
  }

  themeE(){
    this.theme = 'dark'
  }
}
