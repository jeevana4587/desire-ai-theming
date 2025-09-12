import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-header',
  imports: [MatStepperModule,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() currentStep: number = 1;
}
