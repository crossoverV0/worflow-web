import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { BadgeInterface } from 'src/app/common/interfaces/badge';

const BUDGET_LIST: BadgeInterface[] = [
  {
    texto: 'Form',
    tema: 'INFORMACAO',
    size: 'small'
  },
  {
    texto: 'Flash',
    tema: 'INFORMACAO',
    size: 'small'
  },
  {
    texto: 'Novo item',
    tema: 'INFORMACAO',
    size: 'small'
  }
]

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent {
  badgets = BUDGET_LIST
}
