import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <h3>Add a Meal:</h3>
    <form class="form-group">
    <input placeholder="Name" class='col-sm-12 col-md-5 input-lg' #newName required>
    <input placeholder="Details" class='col-sm-12 col-md-5 input-lg' #newDetails required>
    <input placeholder="Calories" class='col-sm-12 col-md-5 input-lg' #newCalories required>
    <input type="date" placeholder="Date" class='col-sm-12 col-md-5 input-lg' #newDate required>
    </form>
    <form class="form-group">
    <button (click)="addMeal(newName, newDetails, newCalories, newDate)" class="btn-success btn-lg">Add</button>
    </form>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement, mealDate: HTMLInputElement){
    var params: string[] = [mealName.value, mealDetails.value, mealCalories.value, mealDate.value];
    this.onSubmitNewMeal.emit(params);
    mealName.value = "";
    mealDetails.value = "";
    mealCalories.value = "";
    mealDate.value = "";
  }
}
