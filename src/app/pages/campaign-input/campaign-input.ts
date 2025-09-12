import { Component } from '@angular/core';
import { WizardService } from '../../services/wizard-service';
import { CampaignDetails } from './campaign-details/campaign-details';
import { SelectTheme } from './select-theme/select-theme';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-campaign-input',
  standalone: true,
  imports: [NgIf, CampaignDetails,SelectTheme],
  templateUrl: './campaign-input.html',
  styleUrls: ['./campaign-input.scss']
})
export class CampaignInput {


  constructor(public wizard: WizardService) {}

}
