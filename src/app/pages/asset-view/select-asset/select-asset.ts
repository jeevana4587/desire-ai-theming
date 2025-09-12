import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-select-asset',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './select-asset.html',
  styleUrls: ['./select-asset.scss']
})
export class SelectAsset {
  // In your component.ts
  searchTerm: string = '';

  selectedCount = 0;
  totalAssets = 0;
}
