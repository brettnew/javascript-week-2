import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'display-calorie-total',
  inputs: ['mealList'],
  template: `
    <strong><h2>Total Caloric Intake: {{getCalorieTotal()}}</h2></strong>
  `
})

export class DisplayTotalCaloriesComponent {
  public mealList: Meal[];
  public total: number = 0;
  getCalorieTotal(){
    this.total = 0;
    for(var i=0; i < this.mealList.length; i++){
      this.total += this.mealList[i].calories;
    }
    return this.total;
  }
}
