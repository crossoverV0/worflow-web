import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './common/services/theme.service';
import { Subject, takeUntil } from 'rxjs';
import { ThemeType } from './common/services/theme.type';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div [class]="theme">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _themeService = inject(ThemeService);
  theme: ThemeType = 'theme-dark';
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.observerThemeChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  observerThemeChanges() {
    this._themeService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => (this.theme = theme));
  }
}
