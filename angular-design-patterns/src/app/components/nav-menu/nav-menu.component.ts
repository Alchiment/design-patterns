import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from '../../models/menu-item.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [MatListModule, RouterModule,],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  title = input<string|null>();
  items = input<MenuItem[]>();
}
