import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressGoalComponent } from './components/progress-goal/progress-goal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressGoalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-design-patterns';
}
