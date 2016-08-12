import {Component, EventEmitter} from 'angular2/core';
import {AppComponent} from './app.component';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [],
  template: `
    <edit-meal-details #ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
