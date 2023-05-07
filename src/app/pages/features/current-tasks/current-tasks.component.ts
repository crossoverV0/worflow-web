import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from 'src/app/common/services/theme.service';
import { TaskHeaderComponent } from 'src/app/common/components/molecules/task-header/task-header.component';

@Component({
  selector: 'app-current-tasks',
  standalone: true,
  imports: [CommonModule, TaskHeaderComponent],
  templateUrl: './current-tasks.component.html',
  styleUrls: ['./current-tasks.component.scss']
})
export class CurrentTasksComponent {
  constructor(protected themeService: ThemeService) {}

  ngOnInit(): void {
  }
}
