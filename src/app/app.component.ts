import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from './common/services/theme.service';

@Component({
  standalone: true, 
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(protected themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.set('dark')
  }
}
