import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressGoalComponent } from './components/progress-goal/progress-goal.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressGoalComponent, MatSidenavModule, NavMenuComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-design-patterns';
  generalMenuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Inicio',
      link: '/',
    },
  ];
  solidMenuItems: MenuItem[] = [
    {
      id: 2,
      title: 'Single Responsibility',
      link: '/single-responsibility',
      description: 'Single Responsibility Principle'
    }
  ]
}
