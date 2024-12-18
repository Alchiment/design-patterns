# Design patterns
The purpose of this repo is to bring a way of implementing the concepts of Design patterns in JavaScript code together with Angular and React frameworks.

## Guidance on folders
```
- README.md
- design-patterns/
-- Here we sill see examples in JavaScript code separated through multiple files .js
- angular-design-patterns/
-- Here we will see an Angular project and split each use case into components.
- react-design-patterns/
-- As well as Angular implementation, we will see a React project and split each use case into components.
```

## Code execution

### Vanilla JavaScript
**design-patterns** folder should be run with NodeJS console.

*Example:* ``` > node ./design-patterns/single-resposibility.js```

*Output: It should print a table in the console or any other result.*

| (index) | name | progress |
|---| --- | --- |
| 0 | 'Objective 1' | 50 |
| 1 | 'Objective 1' | 100 |
| 2 | 'Objective 1' | 75 |

---

### Angular
**angular-design-patterns/** folder should be run through Angular server to see demos.

### React
**react-design-patterns/** folder should be run through Vite server to see demos.

Each concept are separated into pages: 
- Angular: ```angular-design-patterns/src/app/pages```
- React: ```react-design-patterns/src/pages```

## Single responsibility
- Angular / Single responsibility page: ```pages/single-responsibility/single-responsibility.component.ts```
- Angular / Info Goal Component: ```components/info-goal/info-goal.component.ts```
- React / Single responsibility page: ```pages/single-responsibility/SingleResponsibility.tsx```
- React / Info Goal Component: ```components/info-goal/InfoGoal.tsx```

On page "Single responsibility page" you will see a implementation of goals,
which is using a generic component named "Info Goal Component".

In "Info Goal Component" component we are using Single Responsibility principle due to the only responsibility of this component is to show the goal information. That means it can't manipulate data directly, instead it receives data from the parent through inputs.

---

