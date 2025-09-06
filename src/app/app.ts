import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {DatepickerComponent} from './datepicker/datepicker';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    DatepickerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('desire-ai-theming');
}
