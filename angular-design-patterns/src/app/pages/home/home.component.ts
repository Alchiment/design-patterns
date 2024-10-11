import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuItems } from '../../constants/menu-items.constant';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //topics = [
  //  {
  //    id: 1,
  //    title: 'Single Responsibility',
  //    description: 'Single Responsibility Principle',
  //    link: '/single-responsibility',
  //  },
  //  {
  //    id: 2,
  //    title: 'Open/Closed',
  //    description: 'Open/Closed Principle',
  //    link: ''
  //  },
  //  {
  //    id: 3,
  //    title: 'Liskov Substitution',
  //    description: 'Liskov Substitution Principle',
  //    link: ''
  //  },
  //  {
  //    id: 4,
  //    title: 'Interface Segregation',
  //    description: 'Interface Segregation Principle',
  //    link: ''
  //  },
  //  {
  //    id: 5,
  //    title: 'Dependency Inversion',
  //    description: 'Dependency Inversion Principle',
  //    link: ''
  //  }
  //];
  topics = menuItems?.flatMap(
    (item) => {
      console.log('item', item);
      return item.items
    }
  );
  constructor() {
    console.log('topics', this.topics);
    console.log('topics', menuItems);
  }
}
