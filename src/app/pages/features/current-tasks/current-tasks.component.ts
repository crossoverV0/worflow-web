import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/common/services/theme.service';

@Component({
  selector: 'app-current-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.scss'],
})
export class CurrentTasksComponent {
  private readonly _themeService = inject(ThemeService);
  toggleThemeTest = false;

  toggleTheme() {
    if (this.toggleThemeTest) {
      this._themeService.setTheme('theme-light');
    } else {
      this._themeService.setTheme('theme-dark');
    }
    this.toggleThemeTest = !this.toggleThemeTest;
  }
}
