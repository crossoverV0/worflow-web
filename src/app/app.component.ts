import { Component } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  ){}

  getForm(){
    return this._builder.group({
      texto: ['teste']
    });
  }
}
