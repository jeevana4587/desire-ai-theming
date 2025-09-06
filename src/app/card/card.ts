import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  cards = [
    {
      header: 'Header',
      subhead: 'Subhead',
      title: 'Title',
      subtitle: 'Subtitle',
      content: 'Content of the card',
      avatar: 'A'
    }
  ]
}