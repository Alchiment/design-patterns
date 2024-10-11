import { Component } from '@angular/core';
import { InfoGoalComponent } from '../../components/info-goal/info-goal.component';

@Component({
  selector: 'single-responsibility',
  standalone: true,
  imports: [InfoGoalComponent],
  templateUrl: './single-responsibility.component.html',
  styleUrl: './single-responsibility.component.scss'
})
export class SingleResponsibilityComponent {
  public goals = [
    {
      id: 1,
      name: 'Goal 1',
      description: 'Description 1',
      startDate: new Date(),
      endDate: new Date(),
      progress: 15
    },
    {
      id: 2,
      name: 'Goal 2',
      description: 'Description 2',
      startDate: new Date(),
      endDate: new Date(),
      progress: 70
    }
  ]
}
