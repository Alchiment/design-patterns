import { Component, input } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'progress-goal',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './progress-goal.component.html',
  styleUrl: './progress-goal.component.scss'
})
export class ProgressGoalComponent {
  // name = input.required<string>();
  progress = input.required<number>();
}
