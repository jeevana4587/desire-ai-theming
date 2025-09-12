import { Component } from '@angular/core';
import { WizardService } from '../../services/wizard-service';
import { NgIf } from '@angular/common';
import { AssetDetails } from './asset-details/asset-details';
import { DataSource } from './data-source/data-source';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-asset-input',
  imports: [NgIf, AssetDetails, DataSource, MatButtonModule],
  templateUrl: './asset-input.html',
  styleUrl: './asset-input.scss'
})
export class AssetInput {
  constructor(public wizard: WizardService) {}

}
