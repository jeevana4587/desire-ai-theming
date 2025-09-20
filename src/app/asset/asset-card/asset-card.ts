import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.html',
  styleUrls: ['./asset-card.scss'],
  standalone: true,
  imports: [MatButtonModule]
})
export class AssetCardComponent {
  @Input() title: string = 'Nudge-Card';
  @Input() size: string = '360-x-130';
  @Input() imageUrl: string = 'assets/card-picture-red.png';

  // @Input() imageUrl: string = 'assets/sample-banner.png'; // fallback image

  selected: boolean = false;
  automate: boolean = false;
}
