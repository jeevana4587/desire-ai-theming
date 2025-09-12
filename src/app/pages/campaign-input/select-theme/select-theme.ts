import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-theme',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, CommonModule, MatOptionModule, ReactiveFormsModule],
  templateUrl: './select-theme.html',
  styleUrls: ['./select-theme.scss']
})
export class SelectTheme {
  verticals = ['Retail', 'Food', 'Tech', 'Fashion'];
  selectedVertical: string = '';
  selectedTemplate: number | null = null;

  templates = [
    { id: 1, title: 'Template 1', preview: '', colors: ['#FF5200', '#A23E1A', '#725C00'] },
    { id: 2, title: 'Template 2', preview: '', colors: ['#ffb59d', '#ff8b64', '#ff5711'] },
    { id: 3, title: 'Template 3', preview: '', colors: ['#998E8B', '#A08D87', '#FF5200'] }
  ];
}
