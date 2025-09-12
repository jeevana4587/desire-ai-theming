import { Component } from '@angular/core';
import { MainLayout } from './layouts/main-layout/main-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayout],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
