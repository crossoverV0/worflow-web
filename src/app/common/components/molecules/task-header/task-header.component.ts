import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../atoms/badge/badge.component';

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent {

}
