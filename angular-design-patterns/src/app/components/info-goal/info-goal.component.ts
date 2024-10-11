import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProgressGoalComponent } from '../progress-goal/progress-goal.component';

@Component({
  selector: 'info-goal',
  standalone: true,
  imports: [MatCardModule, ProgressGoalComponent],
  templateUrl: './info-goal.component.html',
  styleUrl: './info-goal.component.scss'
})
export class InfoGoalComponent {
  name = input.required<string>();
  description = input.required();
  endDate = input.required<Date>();
  startDate = input.required<Date>();
  progress = input.required<number>();
}
