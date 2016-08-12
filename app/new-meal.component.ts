import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <h3>Add a Meal:</h3>
    <input placeholder="Name" class='col-sm12 input-lg' #newName required>
    <input placeholder="Details" class='col-sm12 input-lg' #newDetails required>
    <input placeholder="Calories" class='col-sm12 input-lg' #newCalories required>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg">Add</button>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement){
    var params: string[] = [mealName.value, mealDetails.value, mealCalories.value];
    this.onSubmitNewMeal.emit(params);
    mealName.value = "";
    mealDetails.value = "";
    mealCalories.value = "";
  }
}
