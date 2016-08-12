import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="form-group">
    <h3>Edit Meal:</h3>
    <input [(ngModel)]="meal.name" class="col-sm12 input-lg"/>
    <input [(ngModel)]="meal.details" class="col-sm12 input-lg"/>
    <input [(ngModel)]="meal.calories" class="col-sm12 input-lg"/>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
