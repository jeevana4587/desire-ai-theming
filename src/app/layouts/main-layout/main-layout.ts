import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardService } from '../../services/wizard-service';
import { Header } from '../header/header';
import { LeftNav } from '../left-nav/left-nav';
import { CampaignInput } from '../../pages/campaign-input/campaign-input';
import { AssetInput } from '../../pages/asset-input/asset-input';
import { AssetView } from '../../pages/asset-view/asset-view';
import { MainCta } from '../main-cta/main-cta';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    LeftNav,
    CampaignInput,
    AssetInput,
    AssetView,
    MainCta,
    Footer,
  ],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayout {
  constructor(public wizard: WizardService) {}

  next() {
    this.wizard.goNext();
  }

  back() {
    this.wizard.goBack();
  }

}
