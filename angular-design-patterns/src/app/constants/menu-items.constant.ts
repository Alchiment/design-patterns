import { GroupMenuItem } from "../../../../common/models/group-menu-item.model";

export const menuItems: GroupMenuItem[] = [
  {
    title: 'Inicio',
    items: [
      {
        id: 1,
        title: 'Inicio',
        link: '/',
        hide: true
      },
    ]
  },
  {
    title: 'SOLID',
    items: [
      {
        id: 2,
        title: 'Single Responsibility',
        description: 'Single Responsibility Principle',
        link: '/single-responsibility',
      },
      {
        id: 3,
        title: 'Open/Closed',
        description: 'Open/Closed Principle',
        link: ''
      },
      {
        id: 4,
        title: 'Liskov Substitution',
        description: 'Liskov Substitution Principle',
        link: ''
      },
      {
        id: 5,
        title: 'Interface Segregation',
        description: 'Interface Segregation Principle',
        link: ''
      },
      {
        id: 6,
        title: 'Dependency Inversion',
        description: 'Dependency Inversion Principle',
        link: ''
      }
    ]
  }
];
