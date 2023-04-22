import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ThemeType } from './theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme$ = new Subject<ThemeType>();

  setTheme(theme: ThemeType) {
    this.theme$.next(theme);
  }
}
