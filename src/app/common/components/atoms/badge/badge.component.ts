import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeInterface } from 'src/app/common/interfaces/badge';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() public content: BadgeInterface = {
    texto: 'Formulário',
    tema: 'INFORMACAO',
    size: 'small'
  }

 
  themeRule = {
    ALERTA: '--color-alert',
    SUCESSO: '--color-sucess',
    ERRO: '--color-error',
    INFORMACAO: '--color-info'
  }

  sizeRule = {
    small: '3px 6px',
    medium: '3px 6px',
    big: '3px 6px',
  }
  
  backgroundColor = this.themeRule[`${this.content.tema}`]
  padding = this.sizeRule[`${this.content.size}`]
}
