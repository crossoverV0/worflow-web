import { Component } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeService } from './common/services/theme.service';

@Component({
  standalone: true, 
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'workflow';

  model: FormGroup = this.getForm()

  constructor(
    private _builder: FormBuilder,
    private themeService: ThemeService
  ){}

  getForm(){
    return this._builder.group({
      texto: ['teste']
    });
  }
}
