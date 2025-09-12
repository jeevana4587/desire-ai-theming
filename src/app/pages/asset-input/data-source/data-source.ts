import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-data-source',
  imports: [MatRadioModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './data-source.html',
  styleUrl: './data-source.scss'
})
export class DataSource {
  selectedSource ='';
}
