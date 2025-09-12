import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-campaign-details',
  standalone: true,
  imports:[MatIconModule, MatFormFieldModule],
  templateUrl: './campaign-details.html',
  styleUrls: ['./campaign-details.scss']
})
export class CampaignDetails {}
