import { Component } from '@angular/core';
import { SelectAsset } from './select-asset/select-asset';
import { Automation } from './automation/automation';
import { NgIf } from '@angular/common';
import { WizardService } from '../../services/wizard-service';

@Component({
  selector: 'app-asset-view',
  standalone: true,
  imports: [NgIf, SelectAsset, Automation],
  templateUrl: './asset-view.html',
  styleUrls: ['./asset-view.scss']
})
export class AssetView {
  constructor(public wizard: WizardService) {}
}
