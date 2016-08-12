import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Listing</h1>
      <hr>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
 public meals: Meal[];
 constructor(){
   this.meals = [
     new Meal("Burrito", 0, "Chicken Burrito with beans and rice", 1000),
     new Meal("Pizza", 1, "1 slice of veggie pizza", 450),
   ];
 }
 mealWasSelected(clickedMeal: Meal): void {
   console.log(clickedMeal);
 }
}
