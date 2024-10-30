import { Component } from '@angular/core';
import { InfoGoalComponent } from '../../components/info-goal/info-goal.component';
import {INFO_GOAL_ITEMS} from "../../../../../common/constants/info-goal-items.constant";

@Component({
  selector: 'single-responsibility',
  standalone: true,
  imports: [InfoGoalComponent],
  templateUrl: './single-responsibility.component.html',
  styleUrl: './single-responsibility.component.scss'
})
export class SingleResponsibilityComponent {
  public goals = INFO_GOAL_ITEMS;
}
