
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  pipes: [CaloriesPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="allCalories" selected="selected">Show all meals</option>
    <option value="500 or less">Show meals that are 500 calories or less</option>
    <option value="more than 500">Show meals that are more than 500 calories</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)">
  </new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "notDone";
  public filterCalories: string= "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal, "child");
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(params): void{
    this.mealList.push(
      new Meal(params[0], this.mealList.length, params[1], parseInt(params[2]))
    );
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
