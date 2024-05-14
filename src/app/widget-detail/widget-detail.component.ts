import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Widget } from '../widget';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widget-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './widget-detail.component.html',
  styleUrl: './widget-detail.component.css'
})
export class WidgetDetailComponent {
  @Input() widget?: Widget;
}
