import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h2>{{meal.name}}:</h2>
    <h3><ul>{{meal.details}} | {{meal.calories}} calories | {{meal.timestamp}}</ul></h3>
  `
})

export class MealComponent {
  public meal: Meal;
}
