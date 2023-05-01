import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/common/services/theme.service';

@Component({
  selector: 'app-current-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.scss']
})
export class CurrentTasksComponent {
  constructor(protected themeService: ThemeService) {}

  ngOnInit(): void {
  }
}
