import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-asset-details',
  imports: [MatTabsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSliderModule],
  templateUrl: './asset-details.html',
  styleUrl: './asset-details.scss'
})
export class AssetDetails {

}
